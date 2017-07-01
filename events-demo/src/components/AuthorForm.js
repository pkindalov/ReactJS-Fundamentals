import React, { Component } from 'react'
import Input from './common/input'

class AuthorForm extends Component {
  render () {
    return (
      <form>
        <Input name='firstName'
          placeholder='First Name'
          value={this.props.author.firstName}
          errors={this.props.errors.firstName}
          onChange={this.props.onChange} />
        <br />
        <Input name='lastName'
          placeholder='Last Name'
          value={this.props.author.lastName}
          errors={this.props.errors.lastName}
          onChange={this.props.onChange} />
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
