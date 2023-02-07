//  Add your code here
const {Schema, model} = require('mongoose')

const celebsSchema = new Schema (
    {
    name: String,
    occupation: String,
    catchPhrase: String,
}

)

// creating CelebModel; from the schema, and then exporting it (CelebModel is named randomly and Celeb is the name that'd be given in the db)

const CelebModel = model('Celeb', celebsSchema)

module.exports = CelebModel