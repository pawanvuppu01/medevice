-- 🩺 MeDevice: Consulting Projects Table
CREATE TABLE IF NOT EXISTS consulting_projects (
  id BIGSERIAL PRIMARY KEY,
  client_name TEXT NOT NULL,
  project_name TEXT NOT NULL,
  description TEXT,
  project_stage TEXT CHECK (project_stage IN ('Initiation', 'Planning', 'Execution', 'Validation', 'Completed')) DEFAULT 'Initiation',
  start_date DATE DEFAULT CURRENT_DATE,
  end_date DATE,
  progress NUMERIC DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  updated_at TIMESTAMP DEFAULT now()
);