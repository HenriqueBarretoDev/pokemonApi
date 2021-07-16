import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './NavBar.scss'
import PokemonLogo from '../Imagens/PokemonLogo.png'
import logoBootstrap from '../Imagens/logoBootstrap.png'
import logoReact from '../Imagens/logoReact.png'

export default () => {
    return (
        <div className="navbar">
            <Navbar >
                <Navbar.Brand>
                    <img className='logoReact'
                        alt=""
                        src={logoReact}
                    />
                </Navbar.Brand>
            </Navbar>
            <Navbar className='logoPokemon' >
                <Navbar.Brand href="#home">
                    <img
                        src={PokemonLogo}
                        width="500"
                        height="120"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar>
            <Navbar  >
                <Navbar.Brand >
                    <img className='logoBootstrap'
                        alt=""
                        src={logoBootstrap}
                    />
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}