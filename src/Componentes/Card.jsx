import React from 'react';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import './Card.scss'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default (props) => {

    return (
        <Card >
            <Card.Body>
                <Card.Title className='title'> {props.name} </Card.Title>
                <div className="content">
                    <div className="left">
                        <Card.Img className='image' variant="top" src={props.img} />
                    </div>
                    <div className="right">
                        <h3>Status</h3>
                        <div className="status">
                            {props.powers.map((item) => {
                                return (
                                    <div className='badges'>
                                        <Badge variant="primary"> {item.stat.name} </Badge>
                                        <ProgressBar max={255} min={0} label={item.base_stat} variant="danger" animated now={item.base_stat} />
                                    </div>
                                )
                            })}
                        </div>
                        <h3>Habilidades</h3>
                        <div className="skills">
                            {props.abilities.map((item) =>
                            (
                                <Badge pill variant="success">{item.ability.name}</Badge>
                            )
                            )}
                        </div>
                        <h3>Tipo</h3>
                        <div className="type">
                            {props.types.map((item) => {
                                return (
                                    <Badge pill variant="success"> {item.type.name}</Badge>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer>

                <Button variant="dark">Anterior</Button>{' '}
                <Button variant="dark">Proximo </Button>{' '}

            </Card.Footer>
        </Card>
    )
}