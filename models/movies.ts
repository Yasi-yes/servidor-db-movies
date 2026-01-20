import { Database } from "bun:sqlite"

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