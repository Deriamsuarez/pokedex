import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const CardsContainer = ({ pokemons, setPokemons, pokemonSearch }) => {

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/`
    axios.get(url)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err.response))
  }, [])

  if (!pokemonSearch) {
    return (
      <div className='class__container'>
        {pokemons && pokemons.map((pokemon) => <Card key={pokemon.url} pokemon={pokemon.url} />)}
      </div>
    )
  } else {
    return (
      <div className='class__container'>
        {<Card key={pokemonSearch} pokemon={pokemonSearch} />}
      </div>
    )
  }
}

export default CardsContainer