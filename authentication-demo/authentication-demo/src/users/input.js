import React from 'react'

const Input = (props) => (
  <input
    type={props.type}
    name={props.name}
    placeholder={props.placeholder}
    value={props.email}
    onChange={props.onChange} />
)

export default Input
