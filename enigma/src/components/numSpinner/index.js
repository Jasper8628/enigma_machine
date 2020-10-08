import React, { useState } from 'react'
import './style.css'

function Index(props) {
    return (
        <div className='spinner'>
            <span><button className="fas fa-caret-up" name={props.name} onClick={props.handleUp}></button> </span>
            <p className="secondary">{props.display[25][0]} </p>
            <p className="primary">{props.display[0][0]} </p>
            <p className="secondary">{props.display[1][0]} </p>
            <span> <button className="fas fa-caret-down" name={props.name} onClick={props.handleDown}></button> </span>
        </div>

    )
}

export default Index
