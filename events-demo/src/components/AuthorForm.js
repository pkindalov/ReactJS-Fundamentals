import React, { Component } from 'react'

class AuthorForm extends Component {
  render () {
    return (
      <form>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          onChange={this.props.onChange}
          value={this.props.author.firstName} /><br />
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          onChange={this.props.onChange}
          value={this.props.author.lastName} /><br />
        <input type='submit' value='Add Author' onClick={this.props.onSave} />
      </form>

      // <form>
      //   <label htmlFor='firstName'>First Name:</label>
      //   <input type='text' name='firstName' id='firstName' /><br />
      //   <label htmlFor='lastName'>Last Name:</label>
      //   <input type='text' name='lastName' id='lastName' /><br />
      //   <input type='submit' value='Add Author' />
      // </form>
    )
  }
}

export default AuthorForm
