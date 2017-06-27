import React, { Component } from 'react'
import TopNavBar from './TopNavBar'

class AboutPage extends Component {
  render () {
    return (
      <div className='container'>
        <TopNavBar />
        <div className='jumbotron'>
          <h1>Thanks for visiting our about page</h1>
        </div>
      </div>
    )
  }
}

export default AboutPage
