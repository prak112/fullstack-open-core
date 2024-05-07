// imports
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// load environment variables
dotenv.config()

if (!process.env.DB_PASSWORD) {
  console.log('DB_PASSWORD not set in .env')
  process.exit(1)
}

// assign URI parameters
const password = process.env.DB_PASSWORD
const databaseName = 'noteApp'

const url = //process.env.MONGODB_URI
`mongodb+srv://fsopen:${password}@cluster0.hnqrjj0.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`

console.log('connecting to ', url)

// setup MongoDB URI connection with mongoose ODM 
mongoose.set('strictQuery',false)

mongoose.connect(url)
  .then(result => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log('Error connecting to MongoDB\nError : ', error.message);
  })

// schema specific only to ODM
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

// transform MongoDB output fields for relevancy
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// export to index.js
module.exports = mongoose.model('Note', noteSchema)