import { initDB } from "./db/init"
import { getAllMovies, getMovieByTitle } from "./models/movies"

const db = await initDB()
//const peliculas = getAllMovies(db)
//console.log(peliculas)
const pelicula = getMovieByTitle(db, "Le Grand")
console.log(pelicula)