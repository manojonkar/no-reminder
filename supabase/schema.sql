-- Schema for NFR (No Fake Reminders) Portal

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leaders (Users)
-- Represents the users of the system who make commitments
CREATE TABLE leaders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Commitments
-- Represents the promises made by leaders to stakeholders
CREATE TABLE commitments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    leader_id UUID NOT NULL REFERENCES leaders(id) ON DELETE CASCADE,
    stakeholder_email VARCHAR(255) NOT NULL,
    promise_description TEXT NOT NULL,
    exact_deadline TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- pending, in_progress, completed, failed
    is_draft BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sub-actions
-- Represents smaller steps or milestones required to fulfill a commitment
CREATE TABLE sub_actions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    commitment_id UUID NOT NULL REFERENCES commitments(id) ON DELETE CASCADE,
    description TEXT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- pending, completed
    due_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Peer Reviews
-- Represents monthly 360 certification reviews
CREATE TABLE peer_reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reviewer_id UUID NOT NULL REFERENCES leaders(id) ON DELETE CASCADE,
    reviewee_id UUID NOT NULL REFERENCES leaders(id) ON DELETE CASCADE,
    review_period_month INTEGER NOT NULL CHECK (review_period_month >= 1 AND review_period_month <= 12),
    review_period_year INTEGER NOT NULL,
    score INTEGER CHECK (score >= 1 AND score <= 5),
    feedback TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (reviewer_id, reviewee_id, review_period_month, review_period_year)
);

-- Triggers to automatically update updated_at timestamps
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leaders_modtime
    BEFORE UPDATE ON leaders
    FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_commitments_modtime
    BEFORE UPDATE ON commitments
    FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_sub_actions_modtime
    BEFORE UPDATE ON sub_actions
    FOR EACH ROW EXECUTE FUNCTION update_modified_column();
