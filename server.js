'use strict'

const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;

const express     = require('express')
const logger      = require('morgan')
const path        = require('path')
const bodyParser  = require('body-parser')

const taskRouter  = require('./routes/tasks')

const app         = express()
const PORT        = process.env.PORT || 3000

// set up logging so that we can see what's happening
app.use(logger( DEV ? 'dev' : 'common' ));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'dist')));

// set up server
app.listen(PORT, function(){
  console.log("server up and running on port ", PORT)
})

/* Routes */

app.use('/tasks', taskRouter);
