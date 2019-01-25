import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
        <h5>
          Hi, I'm <span className="bold">Alex Ingberg</span>
        </h5>
          Data Scientist & Computer Engineer.
          <br/> <br/>
          Researching and analyizing data in various projects on my spare time. 
          <br/> <br/>
          Also, a music lover and a travelling fanatic.
          <br/>
          Drop me a line!
        </div>
      </div>
    )
  }
}

export default About