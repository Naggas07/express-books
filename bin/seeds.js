const Celebrity = require('../models/celebrity')
const Movie = require('../models/movies')
const mongoose = require('mongoose')
require('../config/db.config')


/*const celebrities = [
    {
        name: 'Melendi',
        occupation: 'singer',
        catchPhrase: 'Esa esa la voz'
    },
    {
        name: 'Shakira',
        occupation: 'singer',
        catchPhrase: 'Waka Waka'
    },
    {
        name: 'Cristiano Ronaldo',
        occupation: 'football player',
        catchPhrase: 'Estoy triste'
    }
]

Celebrity.create(celebrities)
    .then((celebrities) => console.info(`${celebrities.length} new books added to the database`))
    .catch(error => console.error(error))
    .then(() => mongoose.connection.close());*/

    const movies = [
        {
            title: 'The Lords of the Rings',
            genre: 'Medieval',
            plot: 'Serverals races try to destroy a ring'
        },
        {
            title: 'Spiderman',
            genre: 'Superhero',
            plot: 'Peter Parker is a teen with super powers'
        },
        {
            title: 'Vikings',
            genre: 'History',
            plot: 'The history of the Viking´s king Raghnar'
        }
    ]

    Movie.create(movies)
        .then((movies) => console.info(`${movies.length} new books added to the database`))
        .catch(error => console.error(error))
        .then(() => mongoose.connection.close());