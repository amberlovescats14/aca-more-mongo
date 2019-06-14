const express = require('express')
const router = express.Router()
const TicketsController = require('../controllers/tickets')


// Create a route for getting all movies/tickets from the db
// This corresponds to item 1 in the controller
router.get('/', (req, res) => {
  return TicketsController.getAll()
    .then(movies => res.json(movies))
})


// Create a route for creating a movie
// This corresponds to item 2 in the controller
router.post('/', (req, res) => {
  return TicketsController.createMovie(req.body)
    .then((movie) => res.json(movie))
})

// Create a route for deleting ONE movie by it's name
// This corresponds to item 3 in the controller
router.delete('/:name', (req, res) => {
  return TicketsController.deleteMovie(req.params.name)
    .then((movies) => res.json(movies))
})

// Create a route for getting ONE movie by it's id
// This corresponds to item 4 in the controller
router.get('/', (req, res) => {
  return TicketsController.getById(req.params.id)
})

module.exports = router