'use strict'

const taskRouter  = require('express').Router();
const db          = require('../models/task');

const sendJSON    = (req,res)=>{res.json(res.rows)}

taskRouter.route('/:id')
  .put(db.updateTask, sendJSON)
  .delete(db.removeTask, (req,res)=>res.send(req.params.id,'deleted'));

taskRouter.route('/')
  .get(db.getTasks, sendJSON)
  .post(db.addTask, sendJSON);


module.exports = taskRouter;

