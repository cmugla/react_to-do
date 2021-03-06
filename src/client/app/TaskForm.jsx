'use strict'

import React from 'react';

export default function TaskForm(props){

  const handleSubmit= event=>{
    event.preventDefault();

    const newTask = {
      task_name: event.target.elements.task_name.value,
      task_desc: event.target.elements.task_desc.value
    }

    props.addTask(newTask);

    event.target.reset();
  }

  return (
    <section className="jumbotron">
      <h1>Task Manager</h1>
      <form className="form-inline" onSubmit={handleSubmit} >
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
          <input type="text" className="form-control input-lg" placeholder="Task Name" name="task_name" />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
          <input type="text" className="form-control input-lg" placeholder="Task Description" name="task_desc" />
        </div>

        <button type="submit" className="btn btn-primary btn-lg">Save</button>
      </form>
    </section>
  )
}
