import React, { Component } from 'react'

class Input extends Component {
  render () {
    let wrapperClass = 'form-control'
    if (this.props.errors && this.props.errors.length > 0) {
      wrapperClass += ' has-error'
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.placeholder}</label>
        <input
          type='text'
          name={this.props.name}
          placeholder={this.props.placeholder}
          id={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value} />
        <span className='error'>{this.props.errors}</span>
      </div>
    )
  }
}

export default Input
