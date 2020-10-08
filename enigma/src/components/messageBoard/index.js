import React from 'react'
import './style.css'

function Index() {
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
        <div className="message-board" id="sidebar">
            <h3>Messages left by others:</h3>
            {data.map((message, index) => (
                <div key={index} className="card">
                    <p>by <span className="user-name">{message.name} </span> at {message.time}</p>
                    <p>message: {message.message}</p>
                    <p>code: {message.code}</p>
                </div>
            ))}

        </div>
    )
}

export default Index
