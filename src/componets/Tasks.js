import React, { Component } from 'react'

import Task from './Task'

class Tasks extends Component {
    /* .map es una funcion que recorre like for */
    render (){
         return this.props.tasks.map(task => <Task task={task}  key={task.id} />) 
    }
}

export default Tasks