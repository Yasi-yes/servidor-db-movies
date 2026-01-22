import { initDB } from "./db/init"
import { Database } from "bun:sqlite"
import { getMovieByTitleAndGenre, getMovieByGenre } from "./models/movies"

const db = await initDB()
const m1 = getMovieByTitleAndGenre(db, "hard", "action")
console.log(m1)