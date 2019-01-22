import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import spotifyRewrappedLogo from '../../assets/images/projects/rewrapped.png'
import dataDataLogo from '../../assets/images/projects/datadata.jpeg'
import musicMagalLogo from '../../assets/images/projects/musicmagal.jpeg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={spotifyRewrappedLogo}
            colour="#B89ACA"
            title="Spotify ReWrapped"
            link="https://towardsdatascience.com/spotify-rewrapped-e2a7cc94fb4e"
            timeperiod="2018"
            subtitle="Spotify surprises us every December with their cool end-of-the-year specials. Nevertheless, this year some of the reports smelled fishy. I decided to investigate..."
          />
          <ExperienceUnit
            logo={dataDataLogo}
            colour="#FFFFFF"
            title="Data, data"
            link="https://towardsdatascience.com/data-data-1fedfac91c79"
            timeperiod="2018"
            subtitle="An immersive analysis into Jorge Drexler’s universe through statistical exploration of his music and lyrics."
          />
          <ExperienceUnit
            logo={musicMagalLogo}
            colour="#DAD9D6"
            title="Music Magal"
            link="https://hackernoon.com/musicmagal-c93e9dabd01a?gi=651af09b85f4"
            timeperiod="2018"
            subtitle="A deep learning and machine learning approach to music group recommendation."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
