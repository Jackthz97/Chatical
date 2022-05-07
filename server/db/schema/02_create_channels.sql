DROP TABLE IF EXISTS channels CASCADE;

CREATE TABLE channels (
  id SERIAL PRIMARY KEY NOT NULL,
  channel_name VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id)
);