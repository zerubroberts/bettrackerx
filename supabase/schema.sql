-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table for authentication
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create betting events table
CREATE TABLE IF NOT EXISTS betting_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    event_name TEXT NOT NULL,
    bet_amount DECIMAL(10,2) NOT NULL,
    odds DECIMAL(10,2) NOT NULL,
    profit_loss DECIMAL(10,2) NOT NULL,
    category TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user sessions table for monitoring
CREATE TABLE IF NOT EXISTS user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    ip_address TEXT,
    user_agent TEXT,
    login_timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    logout_timestamp TIMESTAMP WITH TIME ZONE,
    session_duration INTERVAL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add Row Level Security (RLS)
ALTER TABLE betting_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies for betting_events
CREATE POLICY "Users can view their own betting events"
    ON betting_events
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own betting events"
    ON betting_events
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own betting events"
    ON betting_events
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own betting events"
    ON betting_events
    FOR DELETE
    USING (auth.uid() = user_id);

-- Create policies for user_sessions
CREATE POLICY "Users can view their own sessions"
    ON user_sessions
    FOR SELECT
    USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX idx_betting_events_user_id ON betting_events(user_id);
CREATE INDEX idx_betting_events_event_date ON betting_events(event_date);
CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX idx_user_sessions_login_timestamp ON user_sessions(login_timestamp);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for betting_events
CREATE TRIGGER update_betting_events_updated_at
    BEFORE UPDATE ON betting_events
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 