import React, { useEffect, useState } from 'react';
import Card from '../../Componentes/Card'
import './PokemonDetail.scss'
import * as PokemonService from '../../Services/PokemonService'
import { useParams } from "react-router-dom";

export default () => {
    const [pokemon, setPokemon] = useState({})
    const [sprites, setSprites] = useState({
        other: { dream_world: {}, 'official-artwork': {} },
        versions: {
            'generation-i': { 'red-blue': {}, yellow: {} },
            'generation-ii': { crystal: {} },
        }
    })
    const [abilities, setAbilities] = useState([])
    const [forms, setForms] = useState([])
    const [gameIndices, setGameIndices] = useState([])
    const [moves, setMoves] = useState([])
    const [stats, setStats] = useState([])
    const [types, setTypes] = useState([])

    let { id } = useParams();
    useEffect(() => {
        PokemonService.show(id).then((response) => {
            setPokemon(response.data)
            setSprites(response.data.sprites)
            setAbilities(response.data.abilities)
            setForms(response.data.forms)
            setGameIndices(response.data.game_indices)
            setMoves(response.data.moves)
            setStats(response.data.stats)
            setTypes(response.data.types)

        })
    }, [])

    return (
        <div className="pokemonDetail">
            <Card name={pokemon.name}         
             img={sprites.other['official-artwork'].front_default}
             powers={stats}
             abilities={abilities}
             types={types}
            />
        </div>
    )
}