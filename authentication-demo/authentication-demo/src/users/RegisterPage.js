import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import userData from '../Data/userData'
import Auth from './Auth'

class RegisterPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      error: ' '

    }
  }

  handleUserChange (event) {
    const target = event.target
    const name = target.name
    const value = target.value

    const user = this.state.user
    user[name] = value
    this.setState({ user })
  }

  registerUser (event) {
    event.preventDefault()

    if (!this.validateUser(this.state.user)) {
      return
    }

    const user = this.state.user

    userData
                  .registerUser(user.email, user.password)
                  .then(result => {
                    if (result.error) {
                      this.setState({
                        error: result.error
                      })
                      return
                    }

                    Auth.authenticateUser(result.token)
                    this.props.history.push('/account')
                  })

    // Register user on the server
    // Redirect to some page - for example account
  }

  validateUser (user) {
    if (user.password !== user.confirmPassword) {
      this.setState({
        error: 'Passwords don`t mach'
      })
      return false
    }

    return true
  }

  render () {
    return (
      <div>
        <h1>Register user:</h1>
        <RegisterForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.registerUser.bind(this)}
          />
      </div>
    )
  }
}

export default RegisterPage
