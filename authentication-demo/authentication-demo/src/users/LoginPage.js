import React, { Component } from 'react'
import LoginForm from './LoginForm'
import Auth from './Auth'
import userData from '../Data/userData'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: ''

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

  loginUser (event) {
    event.preventDefault()
    // validate user input
    const user = this.state.user

    userData
                    .loginUser(user.email, user.password)
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
  }

  render () {
    return (
      <div>
        <h1>Login Into Your Account:</h1>
        <LoginForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.loginUser.bind(this)}
         />
      </div>
    )
  }
}

export default LoginPage
