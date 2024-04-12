import React, { type ReactElement } from 'react'
import Form from './Form/Form'
import ProgressBarList from './ProgressBar/ProgressBarList'
import { useAppSelector } from '../redux/hooks'
import questions from '../constants/questions'
import Result from './Result'

const Quiz = (): ReactElement => {
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex)
  const correctAnswers = useAppSelector((state) => state.quiz.correctAnswers)

  const hasNextQuestion = currentQuestionIndex < questions.length

  return (
    <div className="container quiz">
      <div className="quiz__header">
        <p>Тестирование</p>
        <span>16 : 56</span>
      </div>
      <ProgressBarList />
      {hasNextQuestion ? <Form/> : <Result />}
    </div>
  )
}

export default Quiz
