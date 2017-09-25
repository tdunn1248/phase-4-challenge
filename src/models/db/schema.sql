DROP TABLE IF EXISTS member;
DROP TABLE IF EXISTS album;

CREATE TABLE member (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  dateJoined TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE album (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  artist VARCHAR(255)
);
