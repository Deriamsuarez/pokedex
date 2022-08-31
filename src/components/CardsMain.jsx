import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardsContainer from './CardsMain/CardsContainer'
import Filter from './Filter'
import Search from './Search'

const CardsMain = () => {

  const [pokemons, setPokemons] = useState()
  const [pokemonSearch, setPokemonSearch] = useState('')
  const [filter, setFilter] = useState()

  const searchPokemon = e => {
    e.preventDefault()
    if(e.target.name.value){
      setPokemonSearch(`https://pokeapi.co/api/v2/pokemon/${e.target.name.value}`)
    }else{
      setPokemonSearch('')
    }
  }

  const trainer = useSelector(state => state.trainerName)

  return (
    
    <div className='cards__main_container'>
      <span className='userName'><strong className='trainer__name'>Bienvenido {trainer}</strong> </span>
      <div className="functions">
        <Search name={'Buscar'} placeholder={'Busca un pokemón'} action={searchPokemon} />
        <Filter setPokemons={setPokemons} filter={filter} setFilter={setFilter} setPokemonSearch={setPokemonSearch}/>
      </div>
      <CardsContainer pokemons={pokemons} setPokemons={setPokemons} pokemonSearch={pokemonSearch} setPokemonSearch={setPokemonSearch}/>
    </div>
  )
}

export default CardsMain