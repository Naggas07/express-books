const Celebrity = require('../models/celebrity')
const mongoose = require('mongoose')
require('../config/db.config')


const celebrities = [
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
    .then(() => mongoose.connection.close());