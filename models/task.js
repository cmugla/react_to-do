'use strict'

const pg = require('pg-promise')({});

const config = {
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS
};

const _db = pg(config);

module.exports = {
  /* GET /tasks */
  getTasks(req,res,next){
    _db.any('SELECT * FROM tasks;')
      .then( tasks=>{
        res.rows = tasks;
        next();
      })
      .catch( error=>{
        console.error('Error:',error);
      });
  },

  /* POST /tasks */
  addTask(req,res,next){
    console.log('===== add task =====', req.body);
    _db.any(`
      INSERT INTO tasks (task_name, task_desc)
      VALUES ($/name/, $/desc/)
      RETURNING *;`, req.body)
      .then( task=>{
        console.log('Added task successful!');
        res.rows = task;
        next();
      })
      .catch( error=>{
        console.error('Error in adding task:', error);
      });
  },

// this is a test
  /* PUT /tasks/:id */
  updateTask(req,res,next){
    req.body.tID = Number.parseInt(req.params.id);
    req.body.completed = !!req.body.completed

    _db.any(`
      UPDATE tasks
      SET task_name = $/name/,
        task_desc = $/desc/,
        completed = $/completed/,
        task_time_start = $/task_time_start/,
        task_time_end = $/task_time_end/
      WHERE task_id = $/tID/
      RETURNING *;`, req.body)
      .then( task=>{
        console.log('updated task successful');
        res.rows = task;
        next();
      })
      .catch( error=>{
        console.error('Error when updating:',error);
      });
  },

  /* DELETE /tasks/:id */
  removeTask(req,res,next){
    const tID = Number.parseInt(req.params.id);

    _db.none(`
      DELETE FROM tasks
      WHERE task_id = $1;`, [tID])
      .then( ()=>{
        console.log('deleted task successful');
        next();
      })
      .catch( error=>{
        console.error('Error when deleting:', error);
      });
  }

};
