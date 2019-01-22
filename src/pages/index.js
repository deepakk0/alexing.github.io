import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import EducationSection from '../components/EducationSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      
      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>

      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Alex Ingberg</span>
        </h5>

        <h3 className="bold">
          Data Scientist with a degree on Computer Engineering. More than 4 years of experience in Machine Learning and Software Engineering.
          Researching and analyizing data in various projects on my spare time. Drop me a line!
        </h3>
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
      </div>

    </div>
)

export default IndexPage
