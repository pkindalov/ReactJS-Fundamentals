import React, { Component } from 'react'

class Child extends Component {
  render () {
    return (
      <div>
        <h1 onClick={this.props.headerClick}>Click me!</h1>
        <input type='text' name='someInput' onChange={this.props.inputChange} />
      </div>
    )
  }
}

export default Child
