import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import cactusLogo from '../../assets/images/experience/cactus.jpg'
import chorusLogo from '../../assets/images/experience/chorus.png'
import namogooLogo from '../../assets/images/experience/namogoo.png'
import awLogo from '../../assets/images/experience/aw.png'
import coreLogo from '../../assets/images/experience/core.jpg'


class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={namogooLogo}
            colour='#403949'
            title='Namogoo'
            link='http://www.namogoo.com/'
            timeperiod='2018 - present'
            subtitle='Data Infrastructure and Machine Learning Engineer.'
          />
          <ExperienceUnit
            logo={chorusLogo}
            colour='#FFFFFF'
            title='Chorus.ai'
            link='http://www.chorus.ai/'
            timeperiod='2018'
            subtitle='Data Science Internship project: analyzed utterances of sales calls using Natural Language Processing and Machine Learning techniques to get new insights which helped to attract new clients.'
          />
          <ExperienceUnit
            logo={cactusLogo}
            colour='#F8F8F6'
            title='Cactus.ws'
            link='http://www.cactus.ws/'
            timeperiod='2016'
            subtitle='Full-stack Software Engineer: worked with both back and front end web development and iOS apps.'
          />
          {/*
          <ExperienceUnit
            logo={awLogo}
            colour='#AFCA5B'
            title='AW Software'
            link='http://www.awsoftware.com.ar/'
            timeperiod='2015-2016'
            subtitle='Software Engineer: worked offering software solutions based on iOS applications projects for the company’s clients. Amongst them was BBVA Banco Francés.'
          />
          <ExperienceUnit
            logo={coreLogo}
            colour='#FFFFFF'
            title='Core Security'
            link='https://www.secureauth.com/'
            timeperiod='2014'
            subtitle='Cyber Security Research Internship: worked on diverse projects involving vulnerating basic systems, network sniffing, cryptography concepts and disassembling code among others.'
          />
        */}
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
