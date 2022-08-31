import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ pokemon, pokemonSearch }) => {
    
    const [poke, setPoke] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const url = pokemon
        axios.get(url)
            .then(res => setPoke(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClickNavigate = () => navigate(`/pokemon/${poke.name}`)
    useNavigate

    return (
        <div className='card' onClick={handleClickNavigate}>
            <div className="card__header">
                <div className="poke__img_container">
                    <img src={poke?.sprites.other['official-artwork']['front_default']} />
                </div>
            </div>
            <div className="card__body">
                <div className="pokemon__name">{poke?.name}</div>
                <div className="pokemon__type">
                    {poke && poke.types.map(type => <span className='pokemon__type'>{type.type.name}</span>)}
                </div>
                <div className="type">Type</div>
                <div className="line" />
                <div className="info__poke_container">
                    {poke && poke.stats.map(stat =>
                        <div className="info__content">
                            <span>{stat.stat.name}</span>
                            <span>{stat['base_stat']}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card