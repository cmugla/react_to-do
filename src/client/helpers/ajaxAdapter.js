'use strict'

const ajaxAdapter = {

  getTasks(){
    return fetch('/tasks')
      .then( r=> r.json() )
  },

  createTask(newTask){

  },

  updateTask(task){

  },

  deleteTask(task){

  }

}

export default ajaxAdapter
