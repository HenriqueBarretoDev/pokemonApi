import React from "react";
import {Link} from "react-router-dom";
import './Header.scss'

export default () => {
    return (
        <div className="header">
           <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pokemons">pokemons</Link>
              </li>
            </ul>
          </nav>
        </div>
    )
}