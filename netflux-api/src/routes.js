const express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const MovieController = require('./controllers/MovieController');

router.get('/movies', MovieController.findAllMovies);
router.get('/movie/:id', MovieController.findOneMovie);
router.post('/movie', upload.single('movieImage'),MovieController.insertMovie);
router.delete('/movie/:id', MovieController.deleteMovie);


module.exports = router;