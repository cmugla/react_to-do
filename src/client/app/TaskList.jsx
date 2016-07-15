'use strict'

import React from 'react';

export default function TaskList(props){

  return (
    <div className="list-group">

      {Object.keys(props.taskState)
        .filter(key=>props.f( props.taskState[key].completed ))
        .map(key=>(
          <button
            type="button"
            className="list-group-item"
            key={key}
            onClick={()=>props.action(key)}>

            <strong>{props.taskState[key].task_name}</strong>
            {props.taskState[key].task_desc}</button>
        ))
      }

    </div>
  )
}
