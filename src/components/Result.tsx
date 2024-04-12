import React, { type FC, type ReactElement } from 'react'
import { useAppSelector } from '../redux/hooks'
import questions from '../constants/questions'
import _ from 'lodash'

interface ResultProps {
  timerIsRunning: boolean
}
const Result: FC<ResultProps> = ({ timerIsRunning }): ReactElement => {
  const userAnswers = useAppSelector(state => state.userAnswers)

  const calculateCorrectAnswers = (): number => {
    let correctAnswers = 0

    questions.forEach(question => {
      const correctAnswer = question.correct
      const userAnswer = userAnswers[question.id]

      if (_.isEqual(correctAnswer, userAnswer)) {
        correctAnswers += 1
      }
    })

    return correctAnswers
  }

  const correctCount = calculateCorrectAnswers()

  return (
    <div className="quiz__result">
      <h2>Результаты теста</h2>
      {!timerIsRunning && <h3>Время вышло!</h3>}
      <p>Количество правильных ответов: {correctCount} из {questions.length}</p>
    </div>
  )
}

export default Result
