import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import itcLogo from '../../assets/images/education/itc.png'
import fiubaLogo from '../../assets/images/education/fiuba.png'

class EducactionSection extends React.Component {
  render() {
    return (
      <Section title="Education">
        <div className="row">
          <ExperienceUnit
            logo={itcLogo}
            colour="#262626"
            title="Israel Tech Challenge - Fellows: Data Science track"
            link="https://www.itc.tech/fellows-data-science/"
            timeperiod="2017-2018"
            subtitle="An intense fellowship for CS or engineering graduates with at least two years of experience in the industry, to acquire advanced tech skills in Israel.
                      Syllabus contains data science tools as machine learning, deep learning, and data visualization "
          />
          <ExperienceUnit
            logo={fiubaLogo}
            colour="#FFFFFF"
            title="Universidad de Buenos Aires - Computer Engineering"
            link="http://www.fi.uba.ar/es/node/211"
            timeperiod="2011-2016"
            subtitle="6 year program (equivalent to MSc. & BSc.). Oriented to production systems. My optional courses were mostly based on artificial intelligence and machine learning."
          />
        </div>
      </Section>
    )
  }
}

export default EducactionSection
