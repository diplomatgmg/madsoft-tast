import React, { type ReactElement } from 'react'
import Form from './Form/Form'
import ProgressBarList from './ProgressBar/ProgressBarList'
import { useAppSelector } from '../redux/hooks'
import questions from '../constants/questions'
import Result from './Result'
import { useTimer } from 'react-timer-hook'

const Quiz = (): ReactElement => {
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex)

  const hasNextQuestion = currentQuestionIndex < questions.length

  const time = new Date()
  time.setSeconds(time.getSeconds() + 30)

  const { minutes, seconds, isRunning } = useTimer({
    expiryTimestamp: time
  })

  return (
    <div className="container quiz">
      <div className="quiz__header">
        <p>Тестирование</p>
        <span>{minutes} : {seconds.toString().padStart(2, '0')}</span>
      </div>
      <ProgressBarList />
      {hasNextQuestion && isRunning ? <Form/> : <Result timerIsRunning={isRunning} />}
    </div>
  )
}

export default Quiz
