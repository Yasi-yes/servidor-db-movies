import { Database } from "bun:sqlite"

export function getMovies(db: Database, filters: { title: string | undefined, genres: string | undefined }){
    const {title, genres} = filters;
    let movies
    if(title && genres) movies = getMovieByTitleAndGenre(db, title, genres)
        else if(title) movies = getMovieByTitle(db, title)
            else if(genres) movies = getMovieByGenre(db, genres)
                else movies = getAllMovies(db)
            return movies
}

export function getAllMovies(db: Database) {
    const query = db.query(`SELECT * FROM movies`)
    return query.all()
}

export function getMovieById(db: Database, id: number){
    const query = db.query("SELECT * FROM movies WHERE id = ?")
    return query.get(id)
}

export function getMovieByTitle(db: Database, title: string) {
    const query = db.query("SELECT * FROM movies WHERE title LIKE ?")
    return query.all(`%${title}%`)
}

export function getMovieByGenre(db: Database, genre: string) {
    const query = db.query("SELECT * FROM movies WHERE genres LIKE ?")
    return query.all(`%${genre}%`)
}

export function getMovieByTitleAndGenre(db: Database, genre: string, title: string) {
    const query = db.query("SELECT * FROM movies WHERE title LIKE ? AND genres LIKE ?")
    return query.all(`%${genre}%`, `%${title}%`)
}