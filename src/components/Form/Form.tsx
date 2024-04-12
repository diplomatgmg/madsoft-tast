import React, { type ReactElement } from 'react'
import questions from '../../constants/questions'
import { useAppSelector } from '../../redux/hooks'
import QuestionList from './QuestionList'

const Form = (): ReactElement => {
  const { currentQuestionIndex } = useAppSelector((state) => state.quiz)

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <form className="quiz__form">
      <p className="quiz__question-name">{currentQuestion.title}</p>
      <QuestionList question={currentQuestion}/>
      <button type="submit">Ответить</button>
    </form>
  )
}

export default Form
