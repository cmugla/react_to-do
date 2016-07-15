'use strict'

import React from 'react';

export default function TaskList(props){
  return (
    <article className="col-md-6">
      <h3>Open Items</h3>
      <div className="list-group">
        <button type="button" className="list-group-item">Cras justo odio</button>
        <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
        <button type="button" className="list-group-item">Morbi leo risus</button>
        <button type="button" className="list-group-item">Porta ac consectetur ac</button>
        <button type="button" className="list-group-item">Vestibulum at eros</button>
      </div>
    </article>
  )
}
