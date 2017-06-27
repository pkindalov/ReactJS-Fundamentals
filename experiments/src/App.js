import React, { Component } from 'react'
import './App.css'
// import TopNavBar from './components/TopNavBar'
// import LeftColon from './components/LeftColon'
// import MiddleContent from './components/MiddleContent'
// import RigtBar from './components/RightBar'
// import Footer from './components/Footer'
import Routes from './components/Routes'
// import HomePage from './components/HomePage'

class App extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <Routes />
      </div>
    )
  }
}

export default App
