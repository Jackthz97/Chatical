-- schema/01_create_users.sql
DROP TABLE IF EXISTS users CASCADE;
-- CREATE USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL
  -- channels_id INTEGER REFERENCES channels(id)
);