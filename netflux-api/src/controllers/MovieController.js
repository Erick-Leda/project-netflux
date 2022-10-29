const MovieService = require('../services/MovieService');

module.exports = {
    findAllMovies: async (req, res)=> {
        let json = {error:'', result:[]};

        let movies = await MovieService.findAllMovies();

        for(let i in movies){
            json.result.push({
                id: movies[i].id,
                title: movies[i].title,
                imdb: movies[i].imdb,
                genres: movies[i].genres,
                yearRelease: movies[i].yearRelease,
                synopsis: movies[i].synopsis
            });
        }
        res.json(json);
    },

    findOneMovie: async (req, res)=>{
        let json = {error:'', result:{}};

        let id = req.params.id;
        let movie = await MovieService.findOneMovie(id);

        if(movie){
            json.result = movie;
        }

        res.json(json);
    },

    insertMovie: async (req, res) =>{
        let json = {error:'', result:{}};

        let title = req.body.title;
        let imdb = req.body.imdb;
        let genres = req.body.genres;
        let yearRelease = req.body.yearRelease;
        let synopsis = req.body.synopsis;

        if(title && imdb && genres && yearRelease && synopsis){
            let MovieId = await MovieService.insertMovie(title, imdb, genres, yearRelease, synopsis);

            json.result = {
                id: MovieId,
                title,
                imdb,
                genres,
                yearRelease,
                synopsis
            };
        }else{
            json.error = 'Fields not sent'
        }

        res.json(json);
    },

    deleteMovie: async (req, res) => {
        let json = {error:'', result:{}};

        await MovieService.deleteMovie(req.params.id);

        res.json(json);
    }

}