import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Filter = ({ setPokemons, filter, setFilter, setPokemonSearch}) => {

    const [pokemonsFiltred, setPokemonsFiltred] = useState()
    const [findPokemons, setfindPokemons] = useState()
    
    useEffect(() =>{
        let find = []
        if(pokemonsFiltred){
            for (let i = 0; i < pokemonsFiltred.length; i++) {
                const element = pokemonsFiltred[i].pokemon;
                find.push(element)
            }
            setPokemons(find)
            setPokemonSearch('')
        }
        console.log(find)

    },[pokemonsFiltred])

    
console.log(pokemonsFiltred)
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setFilter(res.data.results))
    }, [])

    const handleFilter = filterName => {
        axios.get(`https://pokeapi.co/api/v2/type/${filterName}`)
            .then(res => setPokemonsFiltred(res.data.pokemon))
            .catch(err => console.log(err))

    }


    return (
        <select name="pookemons" id="pokemonsTypes">
            <option>All</option>
            {filter && filter.map(option => <option key={option.name} onClick={() => handleFilter(option.name)}>{option.name}</option>)}

        </select>
    )
}

export default Filter