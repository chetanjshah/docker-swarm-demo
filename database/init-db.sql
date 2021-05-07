CREATE TABLE IF NOT EXISTS movies (
    id serial PRIMARY KEY,
    title VARCHAR NOT NULL,
    genre VARCHAR NOT NULL,
    budget INTEGER NOT NULL,
    release_date TIMESTAMP NOT NULL,
    imdb_score FLOAT NOT NULL
);
