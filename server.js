import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { error } from 'console';
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/search/:type", async (req, res) => {
    const type = req.params.type;
    const query = req.query.query;
    if (!query) {
        return res.status(400).json({error: "Query is required"});
    }

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({error : "Something went wrong."});
    }
});

app.get("/movie/:id", async (req, res) => {
    const movie_id = req.params.id;
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}`);
        const data = await response.json();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({error : "Something went wrong."});
    }
});