DROP TABLE IF EXISTS member;

CREATE TABLE member (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  dateJoined TIMESTAMP DEFAULT current_timestamp
);
