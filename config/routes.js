const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');

router.get('/', controller.base);
router.get('/celebrities', controller.celebrities)
router.get('/celebrities/:id', controller.celebrityDetail)
router.get('/movies', controller.movies)
router.get('/movies/:id', controller.movieUnique)

module.exports = router;