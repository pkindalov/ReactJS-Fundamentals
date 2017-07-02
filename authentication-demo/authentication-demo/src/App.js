import React, { Component } from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import RegisterPage from './users/RegisterPage'
import AccountPage from './users/AccountPage'
import PrivateRoute from './components/common/PrivateRoute'
import LogoutPage from './users/LogoutPage'
import LoginPage from './users/LoginPage'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/register' component={RegisterPage} />
          <Route path='/login' component={LoginPage} />
          <PrivateRoute path='/account' component={AccountPage} />
          <PrivateRoute path='/logout' component={LogoutPage} />
        </Switch>
      </div>
    )
  }
}

export default App
