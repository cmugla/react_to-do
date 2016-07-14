'use strict'

const taskRouter  = require('express').Router();
const db          = require('./models/task');

let taskData = [];

taskRouter.route('/:id')
  .get(function(req,res){
    if(taskData[req.params.id]) {
      res.send(taskData[req.params.id])
    } else {
      res.send('not there',404)
    }
  })
  .put(function(req,res){
    if(taskData[req.params.id]) {
      taskData[req.params.id].task = 'new data'
      res.send(taskData)
    } else {
      res.send('not there',404)
    }
  })
  .delete(function(req,res){
    taskData.splice(req.params.id, 1);
    res.send(taskData)
  })

taskRouter.route('/')
  .get(function(req,res){
    res.send(taskData)
  })
  .post(function(req,res){
    taskData.push({task: 'data'})
    res.send(taskData)
  })


module.exports = taskRouter;
