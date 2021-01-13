import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'

function Index({ side }) {
    useEffect(() => {
        handleGet()
    }, [])
    const handleGet = (e) => {
        axios.get('https://3n45g8mjpd.execute-api.ap-southeast-2.amazonaws.com/enigma/')
            .then(res => {
                setDisplay(res.data.items)
            })
    }

    const [display, setDisplay] = useState([])
    const data =
        [{
            name: "annonymous",
            time: '1970/1/1 0:00',
            code: "12 1 5",
            message: "SPOIUFG"
        }, {
            name: "annonymous",
            time: '1970/1/1 0:00',
            code: "12 1 5",
            message: "SPOIUFG"
        }, {
            name: "annonymous",
            time: '1970/1/1 0:00',
            code: "12 1 5",
            message: "SPOIUFG"
        }, {
            name: "annonymous",
            time: '1970/1/1 0:00',
            code: "12 1 5",
            message: "SPOIUFG"
        },
        ]

    return (
        <div className={`message-board ${side}`} id="sidebar">
            <h3>Messages left by others:  <span onClick={handleGet} className='fas fa-sync-alt'></span></h3>
            {display.map((message, index) => (
                <div key={index} className="card">
                    <p>by <span className="user-name">{message.name} </span> on {message.time}</p>
                    <p>message: {message.message}</p>
                    <p>code: {message.code}</p>
                </div>
            ))}

        </div>
    )
}

export default Index
