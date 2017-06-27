import React, { Component } from 'react'
import TopNavBar from './TopNavBar'
import LeftColon from './LeftColon'
import MiddleContent from './MiddleContent'
import RigtBar from './RightBar'
import Footer from './Footer'

class HomePage extends Component {
  render () {
    return (
      <div className='container'>
        <TopNavBar />
        <LeftColon />
        <MiddleContent />
        <RigtBar />
        <Footer />
      </div>

    //   <div className='container-fluid'>
    //     <h1>Wellcome to Home Page</h1>
    //   </div>
    )
  }
}

export default HomePage
