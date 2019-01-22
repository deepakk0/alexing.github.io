import React from 'react'
import Section from '../Section'
import ProjectUnit from '../ProjectUnit'

import spotifyRewrappedLogo from '../../assets/images/projects/rewrapped.png'
import dataDataLogo from '../../assets/images/projects/datadata.jpeg'
import musicMagalLogo from '../../assets/images/projects/musicmagal.jpeg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ProjectUnit
            logo={spotifyRewrappedLogo}
            colour="#B89ACA"
            title="Spotify ReWrapped"
            link="https://towardsdatascience.com/spotify-rewrapped-e2a7cc94fb4e"
            subtitle="Spotify surprises us every December with their cool end-of-the-year specials. Nevertheless, this year some of the reports smelled fishy. I decided to investigate..."
            github="https://github.com/alexing/spotify_rewrapped"
            medium="https://towardsdatascience.com/spotify-rewrapped-e2a7cc94fb4e"
          />
          <ProjectUnit
            logo={dataDataLogo}
            colour="#FFFFFF"
            title="Data, data"
            link="https://towardsdatascience.com/data-data-1fedfac91c79"
            subtitle="An immersive analysis into Jorge Drexler’s universe through statistical exploration of his music and lyrics."
            github="https://github.com/alexing/datadata"
            medium="https://towardsdatascience.com/data-data-1fedfac91c79"
            additional_link1="https://medium.com/@alexing/data-data-b82201ec1cf4"
            additional_link2_icon="fa fa-medium"
            additional_link2_title="Spanish translation"
            additional_link2={
              <a href='https://www.elobservador.com.uy/nota/-cual-es-la-palabra-mas-usada-por-jorge-drexler-en-sus-canciones--20181020141350' target='_blank'>Article published in El Observador, one of the Uruguayan newspapers with wider distribution.</a>  
            }
          />
          <ProjectUnit
            logo={musicMagalLogo}
            colour="#DAD9D6"
            title="Music Magal"
            link="https://hackernoon.com/musicmagal-c93e9dabd01a?gi=651af09b85f4"
            subtitle="A deep learning and machine learning approach to music group recommendation."
            github="https://github.com/alexing/musicmagal"
            medium="https://hackernoon.com/musicmagal-c93e9dabd01a"
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
