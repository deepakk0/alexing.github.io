import React from 'react'
import Section from '../Section'
import ProjectUnit from '../ProjectUnit'

import lyricsLogo from '../../assets/images/projects/lyrics.png'
import spotifyRewrappedLogo from '../../assets/images/projects/rewrapped.png'
import dataDataLogo from '../../assets/images/projects/datadata.jpeg'
import musicMagalLogo from '../../assets/images/projects/musicmagal2.jpeg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ProjectUnit
            logo={lyricsLogo}
            colour="#efefda"
            title="Bewildering Brain"
            link="https://medium.com/@alexing/bewildering-brain-332d5192e95b"
            subtitle="Writing songs like Bob Dylan and Luis Alberto Spinetta using machine and deep learning."
            github="https://github.com/alexing/lyrics_prediciton"
            medium="https://medium.com/@alexing/bewildering-brain-332d5192e95b"
            

            additional_link1="https://medium.com/@alexing/bewildering-brain-332d5192e95b"
            additional_link1_icon="fa fa-medium"
            additional_link1_title="Bewildering Lyrics: Bob Dylan's version (in English)"

            additional_link2="https://medium.com/datos-y-ciencia/oraciones-artificiales-88b8c66a6e3d"
            additional_link2_icon="fa fa-medium"
            additional_link2_title="Oraciones artificiales: Luis Alberto Spinetta's version (in Spanish)"

            additional_link3="https://silencio.com.ar/noticias/lo-ultimo/crean-un-bot-capaz-de-escribir-en-el-estilo-de-luis-alberto-spinetta-40784/"
            additional_link3_icon="fa fa-newspaper-o"
            additional_link3_title="Article published in Silencio.com.ar, a music medium from Argentina."
          />


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
            colour="#1A1A19"
            title="Data, data"
            link="https://towardsdatascience.com/data-data-1fedfac91c79"
            subtitle="An immersive analysis into Jorge Drexler’s universe through statistical exploration of his music and lyrics."
            github="https://github.com/alexing/datadata"
            medium="https://towardsdatascience.com/data-data-1fedfac91c79"
            additional_link1="https://medium.com/@alexing/data-data-b82201ec1cf4"
            additional_link1_icon="fa fa-medium"
            additional_link1_title="Spanish translation"


            additional_link2="https://www.elobservador.com.uy/nota/-cual-es-la-palabra-mas-usada-por-jorge-drexler-en-sus-canciones--20181020141350"
            additional_link2_icon="fa fa-newspaper-o"
            additional_link2_title="Article published in El Observador, one of the Uruguayan newspapers with wider distribution."
            additional_link3="https://www.redaccion.com.ar/inmersion-en-el-mundo-de-jorge-drexler-a-traves-de-la-exploracion-estadistica-de-su-letra-y-musica/"
            additional_link3_icon="fa fa-newspaper-o"
            additional_link3_title="Article published in Redaccion.com.ar, a new and modern Argentinean medium."
          />
          <ProjectUnit
            logo={musicMagalLogo}
            colour="#DAD9D6"
            title="Music Magal"
            link="https://hackernoon.com/musicmagal-c93e9dabd01a?gi=651af09b85f4"
            subtitle="A deep learning and machine learning approach to music group recommendation."
            github="https://github.com/alexing/musicmagal"
            medium="https://hackernoon.com/musicmagal-c93e9dabd01a"
            timeperiod="2018"
            subtitle="A deep learning and machine learning approach to music group recommendation."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
