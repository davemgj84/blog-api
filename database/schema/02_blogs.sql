DROP TABLE IF EXISTS blogs CASCADE;

CREATE TABLE blogs (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(42) NOT NULL,
  body VARCHAR(2000) NOT NULL,
  author VARCHAR(255) NOT NULL
);