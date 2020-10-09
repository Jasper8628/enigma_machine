
import React, { useEffect, useState } from 'react'
import './style.css'
import Spinner from '../numSpinner'
import Message from '../message'
import Amplify, { API } from 'aws-amplify'
import axios from 'axios'

function Index() {
    const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const secRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    const linkage = [
        15, 22, 19, 25, 17, 23, 21, 18,
        20, 16, 13, 24, 14, 10, 12, 0,
        9, 4, 7, 2, 8, 6, 1, 5,
        11, 3
    ];
    const [code, setCode] = useState('')
    const [name, setName] = useState('Anonymous')
    const [letter, setLetter] = useState('')
    const [message, setMessage] = useState({
        plain: [],
        encripted: []
    })
    const [state, setState] = useState({
        array1: [
            [0, 18], [1, 23], [2, 5],
            [3, 2], [4, 25], [5, 3],
            [6, 8], [7, 22], [8, 9],
            [9, 1], [10, 20], [11, 7],
            [12, 13], [13, 14], [14, 4],
            [15, 0], [16, 17], [17, 16],
            [18, 6], [19, 12], [20, 21],
            [21, 11], [22, 19], [23, 24],
            [24, 10], [25, 15]
        ],
        array2: [
            [0, 16], [1, 19], [2, 21],
            [3, 22], [4, 6], [5, 7],
            [6, 4], [7, 24], [8, 2],
            [9, 3], [10, 9], [11, 0],
            [12, 25], [13, 12], [14, 1],
            [15, 15], [16, 10], [17, 8],
            [18, 17], [19, 20], [20, 23],
            [21, 13], [22, 11], [23, 14],
            [24, 18], [25, 5]
        ],
        array3: [
            [0, 3], [1, 20], [2, 10],
            [3, 25], [4, 1], [5, 23],
            [6, 15], [7, 22], [8, 13],
            [9, 0], [10, 11], [11, 5],
            [12, 24], [13, 6], [14, 12],
            [15, 4], [16, 14], [17, 9],
            [18, 17], [19, 7], [20, 18],
            [21, 16], [22, 21], [23, 19],
            [24, 8], [25, 2]
        ],
    })
    useEffect(() => {
        reset()
        handleGet()
    }, [])
    const handleGet = (e) => {
        axios.get('https://3n45g8mjpd.execute-api.ap-southeast-2.amazonaws.com/enigma/')
            .then(res => {
                console.log(res.data.items)
            })
    }
    const handlePost = (e) => {
        const date = new Date(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear();
        const newDate = [year, month, day].join('-')

        const body = {
            name: name,
            message: message.encripted.join('').toString(),
            code: code,
            time: `${newDate}`
        };
        axios.post('https://3n45g8mjpd.execute-api.ap-southeast-2.amazonaws.com/enigma/', body)
            .then(res => console.log(res))
        reset()
    }

    const handleClick = (e) => {
        const buttonName = e.target.getAttribute('name');
        const letterIndex = letterArray.indexOf(buttonName);
        const firstRotorIndex = state.array1[letterIndex][1];
        const secRotorIndex = state.array2[firstRotorIndex][1];
        const thirdRotorIndex = state.array3[secRotorIndex][1];
        const linkIndex = linkage[thirdRotorIndex];
        const thirdRotorPosition = state.array3.filter(item => item[1] === linkIndex)
        const secRotorPosition = state.array2.filter(item => item[1] === state.array3.indexOf(thirdRotorPosition[0]));
        const firstRotorPosition = state.array1.filter(item => item[1] === state.array2.indexOf(secRotorPosition[0]));
        const finalLetterIndex = state.array1.indexOf(firstRotorPosition[0]);
        const finalLetter = letterArray[finalLetterIndex]
        const button = document.getElementById(finalLetter)
        button.classList.add('glow')
        setTimeout(() => {
            button.classList.remove('glow')
        }, 2000);
        message.plain.push(buttonName);
        message.encripted.push(finalLetter)
        setMessage({
            plain: message.plain,
            encripted: message.encripted
        })
        setLetter(finalLetter)
        shuffle(1)
    }

    const handleBlur = (e) => {
        const button = document.getElementById(letter)
        button.classList.remove('glow')
    }

    const reset = (e) => {
        const random = Math.floor(Math.random() * 17000)
        shuffle(random)
        setLetter('')
        setCode(`${state.array3[0][0]} ${state.array2[0][0]} ${state.array1[0][0]}`)
        setMessage({
            plain: [],
            encripted: []
        })
    }

    const shuffle = (num) => {
        for (let i = 0; i < num; i++) {
            const shift = state.array1.shift();
            state.array1.push(shift)
            if (state.array1[0][0] === 0) {
                const shift = state.array2.shift();
                state.array2.push(shift)
                if (state.array2[0][0] === 0) {
                    const shift = state.array3.shift();
                    state.array3.push(shift)
                }
            }
            setState({
                array1: state.array1,
                array2: state.array2,
                array3: state.array3
            })
        }
    }
    const handleUp = (e) => {
        const name = e.target.name;
        const newArray = state[name];
        const shift = newArray.shift();
        newArray.push(shift);
        setState({
            ...state,
            name: newArray
        })
    }
    const handleDown = (e) => {
        const name = e.target.name;
        const newArray = state[name];
        const pop = newArray.pop();
        newArray.unshift(pop);
        setState({
            ...state,
            name: newArray
        })
    }
    const handleSidebar = (e) => {
        const sideBar = document.getElementById("sidebar")
        let sideBarDisplay = sideBar.style.display;
        let sideBarWidth = sideBar.style.width;
        if (sideBarWidth == "300px") {
            sideBar.style.width = '0px'
            setTimeout(() => {
                sideBar.style.display = 'none'
            }, 800);
        } else {
            sideBar.style.display = 'block'
            setTimeout(() => {
                sideBar.style.width = '300px'
            }, 10);
        }

    }
    return (
        <div className="button-container">
            <div className="spinContainer">
                <Spinner
                    name='array3'
                    handleUp={handleUp}
                    handleDown={handleDown}
                    display={state.array3} />
                <Spinner
                    name='array2'
                    handleUp={handleUp}
                    handleDown={handleDown}
                    display={state.array2} />
                <Spinner
                    name='array1'
                    handleUp={handleUp}
                    handleDown={handleDown}
                    display={state.array1} />
            </div>
            <div className='row'>
                {firstRow.map((letter, index) => (
                    <button onClick={handleClick} onBlur={handleBlur} className="buttons" name={`${letter}`} key={index}>{letter}</button>
                ))}
            </div>
            <div className='row'>
                {secRow.map((letter, index) => (
                    letter === "F" || letter === "J" ?
                        <button onClick={handleClick} onBlur={handleBlur} className="buttons" name={`${letter}`} key={index}><span className="tactile" name={`${letter}`}>{letter}</span></button> :
                        <button onClick={handleClick} onBlur={handleBlur} className="buttons" name={`${letter}`} key={index}>{letter}</button>
                ))}
            </div>
            <div className='row'>
                {thirdRow.map((letter, index) => (
                    <button onClick={handleClick} onBlur={handleBlur} className="buttons" name={`${letter}`} key={index}>{letter}</button>
                ))}
            </div>
            <div className='btm-container'>
                <Message
                    code={code}
                    message={message.plain.join('').toString()}
                    encripted={message.encripted.join('').toString()}
                />
                <div className='post-container'>
                    <button className="postBtn" onClick={reset}>Reset</button>
                    <button className="postBtn" onClick={handlePost}>Post</button>
                    <button className="postBtn" onClick={handleSidebar}> Message Board</button>
                </div>
            </div>
        </div>
    )
}

export default Index
