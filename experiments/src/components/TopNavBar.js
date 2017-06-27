import React, { Component } from 'react'

class TopNavBar extends Component {
  render () {
    return (
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>WebSiteName</a>
          </div>
          <ul className='nav navbar-nav'>
            <li className='active'><a href='/'>Home</a></li>
            <li><a href='/about'>About US</a></li>
            <li><a href='#'>Params</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default TopNavBar
