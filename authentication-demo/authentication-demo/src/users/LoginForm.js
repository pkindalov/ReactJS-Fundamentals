import React from 'react'
import Input from './input'

const LoginForm = (props) => (
  <form>
    <div>{props.error}</div>
    <label htmlFor='email'>Email: </label>

    <Input type='email' name='email' placeholder='E-Mail' value={props.user.email} onChange={props.onChange} />

    <br />
    <label htmlFor='password'>Password: </label>

    <Input type='password' name='password' placeholder='Enter your password here' value={props.user.password} onChange={props.onChange} />
    <br />

    <input type='submit' onClick={props.onSave} />
  </form>
)

export default LoginForm
