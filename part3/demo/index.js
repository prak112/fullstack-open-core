// load environment variables
const dotenv = require('dotenv')
const morgan = require('morgan')
dotenv.config()

// import Node built-in/custom modules using CommonJS syntax
const express = require('express')
const Note = require('./models/note')
const app = express()

// Middleware
app.use(express.json());    // json-parser for POST request
app.use(morgan('tiny'))

// register different routes and HTTP methods
// GET
app.get('/', (request, response) => {
    response.send('<h1>Heello World!</h1>');
})

app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
        response.json(notes)
    })
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    Note.findById(id)
    .then(note => {
        if(note){
            response.json(note)
        }
        else{
            response.status(400).end()
        }
     })
    .catch(error => {
        console.log('ERROR : ', error)
        response.status(400).send({error: 'Malformed request syntax/Invalid request framing'})        
    })
})

// POST
app.post('/api/notes', (request, response) => {
    const body = request.body
    if(!body.content){
        return response.status(400).json({
            error: 'Missing content'
        })
    }
    
    const note = new Note({
        content: body.content,
        important: body.important || false
    })
    note.save().then(savedNote => {
        response.json(savedNote)
    })
})

// DELETE
app.delete('/api/notes/:id', (request, response, next) => {
    Note.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

// declare port and log
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// Unknown Endpoint handler
const unknownEndpoint = (request, response) => {
    response.status(404).send({error : 'Unknown Endpoint'})
}
app.use(unknownEndpoint)    // load before-last Middleware

// Requests Error handler
const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if(error.name === 'CastError'){
        response.status(400).send({error: 'Malformed request syntax/Invalid request framing'})
    }
    next(error)
}
app.use(errorHandler)