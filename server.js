'use strict'

const express         = require('express')
const logger          = require('morgan')
const path            = require('path')
const bodyParser      = require('body-parser')

const taskRouter      = require('./routes/tasks')

const app             = express()
const PORT            = process.env.PORT || 3009

// set up logging so that we can see what's happening
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'dist')));

// set up server
app.listen(PORT, function(){
  console.log("server up and running on port ", PORT)
})

/* Routes */

app.use('/tasks', taskRouter);

app.get('/', function(req,res){
  res.send('home')
})