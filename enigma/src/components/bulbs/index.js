import React from 'react'
import './style.css'

function Index() {

    const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
    const letterArray2 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return (
        <div className='button-container'>
            <div className='row'>
                {letterArray.map((letter, index) => (
                    <button className="bulbs" id={`${letter}`} key={index}>{letter}</button>
                ))}

            </div>
            <div className='row'>
                {letterArray2.map((letter, index) => (
                    <button className="bulbs" id={`${letter}`} key={index}>{letter}</button>
                ))}
            </div>
        </div>

    )
}

export default Index
