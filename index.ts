import { initDB } from "./db/init"
import { getMovies } from "./models/movies"
import express from "express"
import type { Request, Response, NextFunction} from "express"
const app = express();
const PORT = 3000
const db = await initDB()


const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //codigo
     console.log(req.method, req.url, new Date().toISOString())
    if(req.method === "GET"){
        console.log(req.query)
    }
     next()
}

app.use(logMiddleware)

app.get("/movies", (req, res)=> {
   const {title, genre} = req.query
   const filters = {
    title: typeof title === "string" ? title : undefined,
    genres: typeof genre === "string" ? genre : undefined
   }

   const movies = getMovies(db, filters)
   res.json(movies)
})

app.listen(PORT, ()=> {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})