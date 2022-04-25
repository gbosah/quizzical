import React, { useState, useEffect} from 'react';
import './App.css';
import Home from './component/Home';
import Quiz from './component/Quiz';

function App() {

  const [quizHome, setQuizHome] = useState(false)
  const [quiz, setQuiz] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
    .then(res => res.json())
    .then(data => setQuiz(data.results))

}, [])

const quizLIst = quiz.map(question => {
  return(
          <Quiz question={question.question}
                 
          />
  )
})

  function handleClick() {
    setQuizHome(prevQuiz => !prevQuiz)
  }

  return (
    <div>
      {quizHome ?
         <Quiz /> :
         <Home handleClick={handleClick}/>
      }
    </div>
  )
}

export default App;
