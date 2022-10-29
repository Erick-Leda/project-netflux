const db = require('../db');

module.exports = {
    findAllMovies: () =>{
        return new Promise((accepted, rejected) => {

            db.query('SELECT * FROM movies', (error, results)=>{
                if(error){rejected(error); return;}
                accepted(results);
            });
        });
    },

    findOneMovie: (id) => {
        return new Promise((accepted, rejected) => {

            db.query('SELECT * FROM movies WHERE id = ?', [id], (error, results) => {
                if(error){rejected(error); return;}
                accepted(results);
                if(results.length > 0){
                    accepted(results[0]);
                }else{
                    accepted(false)
                }
            });
        });
    },

    insertMovie: (
        title,
        imdb,
        genres,
        yearRelease,
        synopsis) => {
        return new Promise((accepted, rejected) => {

            db.query('INSERT INTO movies (title, imdb, genres, yearRelease, synopsis) VALUES (?, ?, ?, ?, ?)', 
                [title, imdb, genres, yearRelease, synopsis], 
                (error, results) => {
                    if(error){rejected(error); return;}
                    accepted(results.insertId);
                }
            );
        });
    },

    deleteMovie: (id) =>{
        return new Promise((accepted, rejected) => {

            db.query('DELETE FROM movies WHERE id = ?', [id], (error, results)=>{
                if(error){rejected(error); return;}
                accepted(results);
            });
        });
    }
};