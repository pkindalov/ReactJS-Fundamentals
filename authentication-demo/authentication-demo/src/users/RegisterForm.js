import React from 'react'
import Input from './input'

const RegisterForm = (props) => (
  <form>
    <div>{props.error}</div>
    <label htmlFor='email'>Email: </label>
    <Input type='email' name='email' placeholder='E-Mail:' value={props.user.email} onChange={props.onChange} />

    <br />
    <label htmlFor='password'>Password: </label>

    <Input type='password' name='password' placeholder='Password' value={props.user.password} onChange={props.onChange} />

    <br />
    <label htmlFor='confirmPassword'>Confirm Password: </label>

    <Input type='password' name='confirmPassword' placeholder='Confirm Password' value={props.user.confirmPassword} onChange={props.onChange} />
    <br />

    <input type='submit' onClick={props.onSave} />
  </form>
)

export default RegisterForm
