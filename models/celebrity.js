const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: String,
    occupation: { type: String, default: 'unknow'},
    catchPhrase: { type: String, require: true}
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity