import React, { Component } from 'react'
import AuthorForm from './AuthorForm'

class CreateAuthorPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      author: {
        firstName: ' ',
        lastName: ' '
      }
    }
  }

  handleInputChanged (event) {
    const target = event.target
    const name = target.name
    const value = target.value

    let author = this.state.author
    author[name] = value
    this.setState({author})
  }

  saveAuthor (event) {
    event.preventDefault()
    console.log(this.state.author)
  }

  render () {
    return (
      <div>
        <h1>Create Author:</h1>
        <AuthorForm
          author={this.state.author}
          onChange={this.handleInputChanged.bind(this)}
          onSave={this.saveAuthor.bind(this)}
           />
      </div>
    )
  }
}

export default CreateAuthorPage
