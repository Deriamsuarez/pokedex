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


  console.log(poke)
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
      </div>
      
    </div>
  )
}

export default PokemonDetails