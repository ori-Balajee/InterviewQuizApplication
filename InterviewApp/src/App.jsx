import './App.css'
import React, { useState } from 'react'
import Timer from './components/Timer'
import Problem from './components/Problems'
import Result from './components/Result'

function App() {
  const[over, setOver] = useState(false);
  const [score, setScore] = useState(0);


  return (
    <div className='border p-10 border-gray-500'>
      <Timer isOver={setOver}/>
      {over ? <Result score={score}/>:<Problem isOver={setOver} setScore={setScore}/>}
    </div>
  )
}

export default App