import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import NotFoundPage from './NotFoundPage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
