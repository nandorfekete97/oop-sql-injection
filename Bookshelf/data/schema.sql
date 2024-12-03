CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    published_date DATE
);

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    name text NOT NULL,
    password_hash text NOT NULL,
    role text NOT NULL,
    created TIMESTAMP NOT NULL
);