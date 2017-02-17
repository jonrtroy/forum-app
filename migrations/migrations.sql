CREATE TABLE topics
(id BIGSERIAL PRIMARY KEY,
likes INTEGER DEFAULT 0,
title VARCHAR(255),
content TEXT,
username VARCHAR(255) DEFAULT 'anonymous');

CREATE TABLE comments
(id BIGSERIAL,
likes INTEGER DEFAULT 0,
username VARCHAR(255) DEFAULT 'anonymous',
comment TEXT,
topic_id BIGSERIAL);
