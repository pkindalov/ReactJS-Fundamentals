import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class ToDoStore extends EventEmitter {
  constructor () {
    super()

    this.todos = [
        { id: 1, title: 'Go shopping', completed: false },
        { id: 2, title: 'Go walking', completed: false }
    ]
  }

  getAll () {
    return new Promise((resolve, reject) => {
      resolve(this.todos.slice(0))
    })
  }

  createToDo (title) {
    const id = this.todos.length + 1
    this.todos.push({
      id,
      title,
      completed: false
    })

    this.emit('change')
  }

  completeToDo (id) {
    const todo = this.todos.find(todo => todo.id === id)
    todo.completed = true
    this.emit('change')
  }

  handleAction (action) {
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createToDo(action.title)
        break
      }
      case 'COMPLETE_TODO': {
        this.completeToDo(action.id)
        break
      }

      default: {
        break
      }
    }
  }
}

let todoStore = new ToDoStore()

dispatcher.register(todoStore.handleAction.bind(todoStore))

export default todoStore
