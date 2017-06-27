import React, { Component } from 'react'

class Footer extends Component {
  render () {
    let myStyle = {
      background: 'black',
      borderRadius: '5px',
      textAlign: 'center',
      width: '100%',
      height: '200px',
      marginBottom: '5%'
    }

    return (
      <div className='col-lg-12' style={myStyle}>
        <div className='container'>
          <p>Copyright 2017</p>
        </div>
      </div>
    )
  }
}

export default Footer
