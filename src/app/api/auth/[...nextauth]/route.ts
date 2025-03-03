import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Simple mock users database
const users = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "password",
    image: "https://ui-avatars.com/api/?name=Demo+User&background=0D8ABC&color=fff",
  },
  {
    id: "2",
    name: "Test User",
    email: "test@example.com",
    password: "password",
    image: "https://ui-avatars.com/api/?name=Test+User&background=8A2BE2&color=fff",
  }
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Find user by email
        const user = users.find(user => user.email === credentials.email);
        
        // Check if user exists and password matches
        if (user && user.password === credentials.password) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          };
        }
        
        return null;
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
});

export { handler as GET, handler as POST }; 