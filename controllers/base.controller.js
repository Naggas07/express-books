const createError = require('http-errors');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')

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