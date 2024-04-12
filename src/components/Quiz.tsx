import React, { useEffect, type ReactElement } from 'react'
import { useTimer } from 'react-timer-hook'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Form from './Form/Form'
import ProgressBarList from './ProgressBar/ProgressBarList'
import Result from './Result'
import { updateTime } from '../redux/quizSlice'
import questions from '../constants/questions'

const Quiz = (): ReactElement => {
  const dispatch = useAppDispatch()
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex)
  const { timeRemaining } = useAppSelector(state => state.quiz)

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
