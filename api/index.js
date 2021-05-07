const express = require("express");

const app = express();
const { query } = require("./data.js");

app.use(express.json());

app.post("/api/movies", async(req, res) => {
    const { title, genre, budget, release_date, imdb_score } = req.body;
    console.info(`Adding movie with title ${title}`);

    const result = await query(
        "INSERT INTO movies (title, genre, budget, release_date, imdb_score) VALUES ($1, $2, $3, $4, $5) RETURNING id", [title, genre, budget, release_date, imdb_score]
    );

    res.json({ id: result[0].id });
});

app.get("/api/movies", async(req, res) => {
    console.info('Getting all movies');
    const movies = await query("SELECT * FROM movies");
    res.json(movies);
});

app.listen(80, () => {
    console.info(`Server started listening on port 80`);
});