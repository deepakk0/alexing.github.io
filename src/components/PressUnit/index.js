import React, { Component } from 'react'

import './style.scss'

class PressUnit extends Component {
  render() {
    return (
      <div className="press-unit col-xs-12 col-sm-6 col-md-12">

        {this.props.link ? 
          <div>
            <a className='link' href={this.props.link} target="_blank">
              <i className={`${this.props.icon}`}></i>
              &nbsp;&nbsp;&nbsp;{this.props.title}
            </a>
          </div> : ''
        }
        </div>
    )
  } 
}

export default PressUnit
