DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id),
  text VARCHAR(255) NOT NULL,
  channels_id INTEGER REFERENCES channels(id),
  date VARCHAR(255) NOT NULL,
  time VARCHAR(255) NOT NULL
);