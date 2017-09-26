DROP TABLE IF EXISTS member;
DROP TABLE IF EXISTS album;
DROP TABLE IF EXISTS review;

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

CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  content VARCHAR(255),
  datePosted TIMESTAMP DEFAULT current_timestamp,
  review_user_id INT references member(id),
  review_album_id INT references album(id)
);
