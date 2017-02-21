-- created 2 tables for this project, one for topics and one for comments
CREATE TABLE topics (
  id BIGSERIAL PRIMARY KEY,
  likes INTEGER DEFAULT 0,
  title VARCHAR(255),
  content TEXT,
  comments_number INTEGER DEFAULT 0
);

CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  likes INTEGER DEFAULT 0,
  username VARCHAR(255) DEFAULT 'anonymous',
  content TEXT,
  topic_id INTEGER REFERENCES topics(id)
);
