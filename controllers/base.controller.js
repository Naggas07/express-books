const createError = require('http-errors');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movies')

module.exports.base = (req, res, next) => {
    res.render('index', {
        title: 'Welcome to your CRUD project'
    });
};

module.exports.celebrities = ((req, res, next) => {
    Celebrity.find()
        .then(
            celebrities => {
                res.render('celebrities/index', {celebrities})
            }
        )
        .catch(
            error => next(error)
        )
})

module.exports.movies = ((req, res, next) => {
    Movie.find()
        .then(
            movies => {
                res.render('movies/index', { movies })
            }
        )
        .catch(
            error => next(error)
        )
})

module.exports.movieUnique = ((req, res, next) => {
    const id = req.params.id
    Movie.findById(id)
        .then(
            movie => {
                res.render('movies/movieDetail', {movie})
            }
        )
        .catch(
            error => next(error)
        )
})