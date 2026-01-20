import { initDB } from "./db/init"
import { getAllMovies, getMovieByTitle } from "./models/movies"
import express from "express"
const app = express();
const PORT = 3000
const db = await initDB()

app.get("/movies", (req, res)=> {
    const peliculas = getAllMovies(db)
    res.json(peliculas)
})

app.listen(PORT, ()=> {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})