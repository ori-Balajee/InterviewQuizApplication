import React, { useState, useEffect } from 'react'

const Timer = ()=>{
    const[time, setTime] = useState(5);
    const[displayTime, setDisplayTime] = useState('');

    useEffect(()=>{
        let id = setInterval(() =>{
            setTime(timee => {
                if(timee <= 0){
                    clearInterval(id);
                    return 0;
                }
                return timee-1;
            })
        },1000);

        return() =>{
            clearInterval(id);
        }
    },[]);

    useEffect(()=>{
        let formatedTime = (`${(Math.floor(time/60)).toString().padStart(2,0)}
        : ${(time % 60).toString().padStart(2,0)}`);

        setDisplayTime(formatedTime);
    },[time]);

  return (
    <h1>Time Left : {displayTime}</h1>
  )
}

export default Timer