import React, { useState, useEffect } from 'react'
import questions from './question.json'

const Timer = ({ isOver }) => {
    const[time, setTime] = useState(questions.length*10);
    //const [time, setTime] = useState(5);
    const [displayTime, setDisplayTime] = useState('');

    useEffect(() => {
        let id = setInterval(() => {
            setTime(timee => {
                if (timee <= 0) {
                    clearInterval(id);
                    return 0;
                }
                return timee - 1;
            })
        }, 1000);

        return () => {
            clearInterval(id);
        }
    }, []);

    useEffect(() => {
        if (time === 0) {
            isOver(true);
        }

        let formatedTime = (`${(Math.floor(time / 60)).toString().padStart(2, 0)}
        : ${(time % 60).toString().padStart(2, 0)}`);

        setDisplayTime(formatedTime);
    }, [time,isOver]);

    return (
        <h2>Time Left : {displayTime}</h2>
    )
}

export default Timer

