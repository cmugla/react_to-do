'use strict'

const express         = require('express')
const logger          = require('morgan')
const path            = require('path')
const bodyParser      = require('body-parser')

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

app.route('/tasks/:id')
  .get(function(req,res){
    res.send(`show task ${req.params.id}`)
  })
  .put(function(req,res){
    res.send(`edit task ${req.params.id}`)
  })
  .delete(function(req,res){
    res.send(`delete task ${req.params.id}`)
  })

app.route('/tasks')
  .get(function(req,res){
    res.send('show tasks')
  })
  .post(function(req,res){
    res.send('posted new track')
  })

app.get('/', function(req,res){
  res.send('home')
})
