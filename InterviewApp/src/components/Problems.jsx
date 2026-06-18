import React, { useState } from 'react'
import questions from './question.json'

const Problem = ({isOver, setScore}) => {
  const [index, setIndex] = useState(0);

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questions[index].answer) {
      setScore(score => score + 1);

      if (index < questions.length - 1) {
        setIndex(index => index + 1);
      }else{
        isOver(true);
      }
    }else{
      setScore(score => score - 1);
    }
  };

  return (
    <div>
      <h2 className='mt-8 mb-4'>
        {questions[index].question}
      </h2>

      <div className='flex flex-col gap-3'>
        {
          questions[index].options.map((option) => {
            return <button key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          })
        }
      </div>

    </div>
  )
}

export default Problem