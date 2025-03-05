import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createSupabaseAdmin } from "@/lib/supabase/server";
import bcrypt from "bcrypt";

// Initialize the Supabase admin client
const initSupabaseAdmin = () => {
  try {
    return createSupabaseAdmin();
  } catch (error) {
    console.error("Failed to initialize Supabase client:", error);
    throw new Error("Authentication service unavailable");
  }
};

// Ensure demo user exists
const ensureDemoUserExists = async () => {
  try {
    const supabase = initSupabaseAdmin();
    
    // Check if demo user exists
    const { data: existingUser, error: queryError } = await supabase
      .from('users')
      .select('id')
      .eq('email', 'demo@example.com')
      .maybeSingle();
    
    if (queryError) {
      console.error('Error checking for demo user:', queryError);
      return;
    }
    
    // If demo user doesn't exist, create one
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash('password', 10);
      
      const { error: insertError } = await supabase
        .from('users')
        .insert({
          name: 'Demo User',
          email: 'demo@example.com',
          password_hash: hashedPassword,
          image_url: 'https://ui-avatars.com/api/?name=Demo+User&background=0D8ABC&color=fff',
        });
      
      if (insertError) {
        console.error('Error creating demo user:', insertError);
      } else {
        console.log('Demo user created successfully');
      }
    }
  } catch (error) {
    console.error('Error in ensureDemoUserExists:', error);
  }
};

// Run this on startup
ensureDemoUserExists().catch(console.error);

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" },
        isRegister: { label: "Is Register", type: "boolean" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) {
            return null;
          }

          const supabase = initSupabaseAdmin();
          const isRegister = credentials.isRegister === 'true';
          
          if (isRegister) {
            // Registration flow
            if (!credentials.name) {
              throw new Error("Name is required for registration");
            }
            
            // Check if user already exists
            const { data: existingUser } = await supabase
              .from('users')
              .select('id')
              .eq('email', credentials.email)
              .maybeSingle();
              
            if (existingUser) {
              throw new Error("User with this email already exists");
            }
            
            // Hash the password
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            
            // Create the user
            const { data: newUser, error: createError } = await supabase
              .from('users')
              .insert({
                name: credentials.name,
                email: credentials.email,
                password_hash: hashedPassword,
                image_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(credentials.name)}&background=random&color=fff`,
              })
              .select('id, name, email, image_url')
              .single();
              
            if (createError) {
              console.error("Error creating user:", createError);
              throw new Error("Failed to create user");
            }
            
            return {
              id: newUser.id,
              name: newUser.name,
              email: newUser.email,
              image: newUser.image_url,
            };
          } else {
            // Login flow
            const { data: user, error } = await supabase
              .from('users')
              .select('id, name, email, password_hash, image_url')
              .eq('email', credentials.email)
              .maybeSingle();
              
            if (error || !user) {
              console.error("Error fetching user:", error);
              return null;
            }
            
            // Special case for demo user
            if (credentials.email === 'demo@example.com' && credentials.password === 'password') {
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image_url,
              };
            }
            
            // Verify the password with bcrypt
            const passwordMatch = await bcrypt.compare(credentials.password, user.password_hash);
            
            if (!passwordMatch) {
              return null;
            }
            
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image_url,
            };
          }
        } catch (error: any) {
          console.error("Authorization error:", error);
          throw new Error(error.message || "Authentication failed");
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
  logger: {
    error(code, metadata) {
      console.error({ type: 'inside_auth_error', code, metadata });
    },
    warn(code) {
      console.warn({ type: 'inside_auth_warn', code });
    },
    debug(code, metadata) {
      console.log({ type: 'inside_auth_debug', code, metadata });
    },
  },
});

export { handler as GET, handler as POST }; 