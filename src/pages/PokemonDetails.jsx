import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {

  const [poke, setPoke] = useState()

  const { name } = useParams()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => setPoke(res.data))
      .catch(err => console.log(err.response))
  }, [])


  return (
    <div className='cards__main_container'>

      <div className="header__body">
        <div className="img_container">
          <img src={poke?.sprites.other['official-artwork']['front_default']} />
        </div>
      </div>
      <div className="body_container">
        <div className="id_box">{`#${poke?.id}`}</div>
        <div className="poke__name">{poke?.name}</div>
        <div className="info_details">
          <div className="info__weight">
            <label>Weight</label>
            <label>{poke?.weight}</label>
          </div>
          <div className="info__weight">
            <label>Height</label>
            <label>{poke?.height}</label>
          </div>
        </div>
        <div className="types__skills_container">
          <div className="type_container">
            <label htmlFor="">Type</label>
            <div className="types__slides">
              <label htmlFor="">{poke?.types[0].type.name}</label>
              <label htmlFor="">{poke?.types[1].type.name}</label>
            </div>
          </div>
          <div className="type_container">
            <label htmlFor="">Abilities</label>
            <div className="types__slides">
              <label htmlFor="">{poke?.abilities[0].ability.name}</label>
              <label htmlFor="">{poke?.abilities[1].ability.name}</label>
            </div>
          </div>
        </div>
        <div className="stats_container">
          <div className="info__stat">
            <label htmlFor="">HP:</label>
            <label htmlFor="">HP:</label>
          </div>
          <div className="progress__bar_container">
            <div className="progress__bar"></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PokemonDetails