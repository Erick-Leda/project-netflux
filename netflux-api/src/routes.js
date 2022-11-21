const express = require('express');
const router = express.Router();


const MovieController = require('./controllers/MovieController');

router.get('/movies', MovieController.findAllMovies);
router.get('/movie/:id', MovieController.findOneMovie);
router.post('/movie', MovieController.insertMovie);
router.delete('/movie/:id', MovieController.deleteMovie);


module.exports = router;