const express = require('express') //express module load
const app = express() //create express app
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://zvzv9808:park3587rs@boilerplate.g94cis2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))




app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))