import React, { type ReactElement, useEffect } from 'react'
import Form from './Form/Form'
import ProgressBarList from './ProgressBar/ProgressBarList'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import questions from '../constants/questions'
import Result from './Result'
import { useTimer } from 'react-timer-hook'
import { updateTime } from '../redux/quizSlice'

const Quiz = (): ReactElement => {
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex)
  const { timeRemaining } = useAppSelector(state => state.quiz)

  const dispatch = useAppDispatch()

  const hasNextQuestion = currentQuestionIndex < questions.length

  const time = new Date()
  time.setSeconds(time.getSeconds() + timeRemaining)

  const { minutes, seconds, isRunning, pause } = useTimer({
    expiryTimestamp: time
  })

  useEffect(() => {
    dispatch(updateTime(minutes * 60 + seconds))
  }, [minutes, seconds])

  return (
    <div className="container quiz">
      <div className="quiz__header">
        <p>Тестирование</p>
        <span>{minutes} : {seconds.toString().padStart(2, '0')}</span>
      </div>
      <ProgressBarList />
      {hasNextQuestion && isRunning && timeRemaining !== 0 ? <Form/> : <Result pauseTimer={pause}/>}
    </div>
  )
}

export default Quiz
