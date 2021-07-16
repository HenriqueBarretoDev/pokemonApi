import React, { useEffect, useState } from 'react';
import './Home.scss'
import * as PokemonService from '../../Services/PokemonService';

export default () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        PokemonService.all(500).then((response) => {
            setPokemons(response.data.results)
        })
    }, [])
    return (
        <div className="home">
            {pokemons.map((pokemon) => {
                return (
                    <p>
                        <a href={'/pokemon/' + pokemon.url.replace('v2','').replace(/\D/g,'')}>{pokemon.name} </a>
                    </p>
                )
            })}
        </div>
    )
}
