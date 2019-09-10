import React from 'react'
import Section from '../Section'
import PressUnit from '../PressUnit'

class PressSection extends React.Component {
  render() {
    return (
      <Section title="PRESS">
        <div className="row">
        <PressUnit
            link="https://open.spotify.com/episode/3lt9tVvCFHpcBx2F7uORXL"
            icon="fa fa-microphone"
            title="Hummus and Tech: guest in high profile Israeli tech podcast. Episode about job searching and the Israeli data industry."
          />
        <PressUnit
            link="https://web.metro951.com/metronow/44029/?alex-ingberg-creador-del-bot-de-spinetta"
            icon="fa fa-microphone"
            title="Radio Metro: guest in 'Días como estos'. Feature about my Bewildering Brain project. In Spanish."
        />

        <PressUnit
            link="https://www.lanacion.com.ar/tecnologia/creo-bot-compone-letras-estilo-luis-alberto-nid2246043"
            icon="fa fa-newspaper-o"
            title="Article published in La Nación, Argentina's most prestigious newspaper, about Bewildering Brain. In Spanish."
        />

        <PressUnit
            link="https://www.elobservador.com.uy/nota/-cual-es-la-palabra-mas-usada-por-jorge-drexler-en-sus-canciones--20181020141350"
            icon="fa fa-newspaper-o"
            title="Article published in El Observador, one of the Uruguayan newspapers with widest distribution, about Data Data. In Spanish."
        />


        <PressUnit
            link="https://www.redaccion.com.ar/inmersion-en-el-mundo-de-jorge-drexler-a-traves-de-la-exploracion-estadistica-de-su-letra-y-musica/"
            icon="fa fa-newspaper-o"
            title="Article published in Redaccion.com.ar, a new and modern Argentinean medium, about Data Data. In Spanish."
        />

        <PressUnit
            link="https://silencio.com.ar/noticias/lo-ultimo/crean-un-bot-capaz-de-escribir-en-el-estilo-de-luis-alberto-spinetta-40784/"
            icon="fa fa-newspaper-o"
            title="Article published in Silencio.com.ar, a music medium from Argentina, about Bewildering Brain. In Spanish."
        />

        <PressUnit
            link="https://www.calcalist.co.il/local/articles/0,7340,L-3747723,00.html"
            icon="fa fa-newspaper-o"
            title="Article published in Calcalist, an Israeli economics and tech leading newspaper, about immigration to Israel and its tech market. In Hebrew."
        />

        <PressUnit
            link="http://www.sitioandino.com.ar/n/294069/?fbclid=IwAR2GgV3ENxMMnj0va85gCHNWEbwWM7d4dljtWrqmWQFshCUWT7KpvnoLAJY"
            icon="fa fa-microphone"
            title="Radio Andina: guest in 'Todo por la tarde'. Feature about my Bewildering Brain project. In Spanish."
          />
        <PressUnit
            link="http://www.radionacional.com.ar/un-bot-escribe-canciones-como-el-flaco/"
            icon="fa fa-microphone"
            title="Radio Nacional: guest in 'Cómo conseguir cheques'. Feature about my Bewildering Brain project. In Spanish."
        />


        </div>
      </Section>
    )
  }
}

export default PressSection
