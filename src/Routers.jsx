import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Pokemons from "./Pages/Pokemons/Pokemons";
import PokemonDetail from "./Pages/Pokemons/PokemonDetail";


export default () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>

                <Route path="/pokemons">
                    <Pokemons ></Pokemons>
                </Route >

                <Route path="/pokemon/:id">
                    <PokemonDetail></PokemonDetail>
                </Route>

            </Switch>
        </div>
    )
}
