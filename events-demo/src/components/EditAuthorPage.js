import React, { Component } from 'react'

class EditAuthorPage extends Component {
  render () {
    return (
      <form>
        <label htmlFor='firstName'>First Name:</label>
        <input type='text' name='firstName' id='firstName' /><br />
        <label htmlFor='lastName'>Last Name:</label>
        <input type='text' name='lastName' id='lastName' /><br />
        <input type='submit' value='Add Author' />
      </form>
    )
  }
}

export default EditAuthorPage
