import React, { useEffect, useState } from 'react';
import Card from '../../Componentes/Card'
import './PokemonDetail.scss'
import * as PokemonService from '../../Services/PokemonService'
import {
    useParams
} from "react-router-dom";


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
           
            >
                
            </Card>
            <strong><p>Dados do Pokemon: {pokemon.name}</p></strong>
            <p>Nome do Pokemon {pokemon.species ? pokemon.species.name : ''}</p>
            <p>Se encontra na Pokebola: {pokemon.order}</p>
            <p>Altura : {pokemon.height} </p>
            <p>Peso: {pokemon.weight} kg</p>
            <p>Experiência base do Pokemon: {pokemon.base_experience} </p>
            <p>Local de encontro em API: {pokemon.location_area_encounters}</p>
            <p>Url do tipo de pokemon {pokemon.species ? pokemon.species.url : ''}</p>
            
            <img src={sprites.back_default} alt="" />
            <img src={sprites.front_default} alt="" />
            <h3>oficial foto</h3>
            <img src={sprites.other.dream_world.front_default} alt="" />
            <img src={sprites.other['official-artwork'].front_default} alt="" />


            <img src={sprites.back_shiny} alt="" />
            <img src={sprites.front_shiny} alt="" />
            <h1>nova</h1>
            <img src={sprites.versions['generation-i']['red-blue'].back_default} alt="" />
            <img src={sprites.versions['generation-i']['red-blue'].back_gray} alt="" />
            <img src={sprites.versions['generation-i']['red-blue'].front_default} alt="" />
            <img src={sprites.versions['generation-i']['red-blue'].front_gray} alt="" />
            <img src={sprites.versions['generation-i'].yellow.front_gray} alt="" />
            <h1>novas 2</h1>
            <img src={sprites.versions['generation-ii'].crystal.back_default} alt="" />
            <img src={sprites.versions['generation-ii'].crystal.back_shiny} alt="" />
            <img src={sprites.versions['generation-ii'].crystal.front_default} alt="" />
            <img src={sprites.versions['generation-ii'].crystal.front_shiny} alt="" />



            <h3>Habilidades</h3>
            {abilities.map((item) => {
                return (
                    <>
                        <p> slot {item.slot}</p>
                        <p> Nome da Habilidade: {item.ability.name}</p>
                        <p> Fonte da Habilidade: {item.ability.url}</p>
                    </>
                )
            })}

            {forms.map((item) => {
                return (
                    <>
                        <p> Nome da Habilidade: {item.name}</p>
                        <p> Nome da Habilidade: {item.url}</p>
                    </>
                )
            })}
            <h3>Índices</h3>
            {gameIndices.map((item) => {
                return (
                    <>
                        <p> índice do jogo: {item.game_index}</p>
                        <p> Cor do jogo: {item.version.name}</p>
                        <p> Versão do jogo: {item.version.url}</p>
                    </>
                )
            })}
            <h3>Filmes </h3>
            {moves.map(item => {
                return (
                    <>
                        <p>Filmes: {item.move.name}</p>
                        <p>APi URL: {item.move.url}</p>
                        <h1>SubItens</h1>
                        {item.version_group_details.map(subItem => {

                            return (
                                <>
                                    <p>APi URL: {subItem.level_learned_at}</p>
                                    <p>APi URL: {subItem.move_learn_method.name}</p>
                                    <p>APi URL: {subItem.move_learn_method.url}</p>
                                    <p>APi URL: {subItem.version_group.name}</p>
                                    <p>APi URL: {subItem.version_group.url}</p>
                                    
                                </>
                            )
                        })}




                    </>
                )
            })}

            <h3>status</h3>
            {stats.map((item) => {
                return (
                    <>
                        <p>status:{item.base_stat}</p>
                        <p>status:{item.effort}</p>
                        <p>status:{item.stat.name}</p>
                        <p>status:{item.stat.url}</p>
                    </>
                )
            })}
            <h3>Tipos de Pokemon</h3>
            {types.map((item) => {
                return (
                    <>
                        <p>classe: {item.slot}</p>
                        <p>tipo: {item.type.name}</p>
                        <p>tipo: {item.type.url}</p>
                    </>
                )
            })}



        </div>
    )
}

