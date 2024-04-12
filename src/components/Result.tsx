import React, { type ReactElement } from 'react'
import { useAppSelector } from '../redux/hooks'
import questions from '../constants/questions'
import _ from 'lodash'

const Result = (): ReactElement => {
  const userAnswers = useAppSelector(state => state.userAnswers)

  const calculateCorrectAnswers = (): number => {
    let correctAnswers = 0

    questions.forEach(question => {
      const correctAnswer = question.correct
      const userAnswer = userAnswers[question.id]

      if (_.isEqual(correctAnswer, userAnswer)) {
        correctAnswers += 1
      } else {
        console.log(`Correct - ${JSON.stringify(question.correct)}, your answer - ${userAnswers[question.id]}`)
      }
    })

    return correctAnswers
  }

  const correctCount = calculateCorrectAnswers()

  return (
    <div className="quiz__result">
      <h2>Результаты теста</h2>
      <p>Количество правильных ответов: {correctCount} из {questions.length}</p>
    </div>
  )
}

export default Result
