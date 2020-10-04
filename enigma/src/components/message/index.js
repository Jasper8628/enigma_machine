import React from 'react'
import './style.css'

function Index(props) {
    return (
        <div className="msgContainer">
            <p className="code">Rotor combination: {props.code}</p>
            <p className="message">Original message: {props.message}</p>
            <p className="encripted">Encripted message: {props.encripted}</p>

        </div>
    )
}

export default Index
