import React, { Component } from 'react'
import TodoActions from '../actions/ToDoActions'

class Todo extends Component {
  completeToDo (event) {
    event.preventDefault()
    TodoActions.completeToDo(this.props.id)
  }

  render () {
    return (
      <li>
        {this.props.title} - {this.props.completed ? 'DONE' : (
          <button onClick={this.completeToDo.bind(this)}>PENDING</button>
        )}
      </li>
    )
  }
}

export default Todo
