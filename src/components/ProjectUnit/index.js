import React, { Component } from 'react'

import './style.scss'

class ProjectUnit extends Component {
  render() {
    return (
      <div className="project-unit col-xs-12 col-sm-6 col-md-12">
        <a href={this.props.link} target="_blank">
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.logo})`,
              backgroundColor: this.props.colour
            }}>
          </div>
        </a>
        <div className="title bold">
          {this.props.title}
        </div>
        <div className="article-links">
          <ul className="icons-list">
            <li className="icon">
              <a href={this.props.github} target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li className="icon">
              <a href={this.props.medium} target="_blank">
                <i className="fa fa-medium"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="subtitle">
          {this.props.subtitle}
        </div>

      {this.props.additional_link1 ? 
        <div>
                <a className='additional_link' href={this.props.additional_link1} target="_blank">
                  <i className={`${this.props.additional_link1_icon}`}></i>
                  &nbsp;&nbsp;&nbsp;{this.props.additional_link1_title}
                </a>
        </div> : ''
      }
      {this.props.additional_link2 ? 

        <div>
                <a className='additional_link' href={this.props.additional_link2} target="_blank">
                  <i className={`${this.props.additional_link2_icon}`}></i>
                  &nbsp;&nbsp;&nbsp;{this.props.additional_link2_title}
                </a>
        </div> : ''
      }
      {this.props.additional_link3 ? 

        <div>
                <a className='additional_link' href={this.props.additional_link3} target="_blank">
                  <i className={`${this.props.additional_link3_icon}`}></i>
                  &nbsp;&nbsp;&nbsp;{this.props.additional_link3_title}
                </a>
        </div> : ''
      }
      <div>&nbsp;&nbsp;&nbsp;</div> {/* for spacing*/}
      </div>
    )
  } 
}

export default ProjectUnit
