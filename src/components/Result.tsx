import React, { type FC, type ReactElement, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import _ from 'lodash'
import { resetQuiz } from '../redux/quizSlice'
import { clearUserAnswers } from '../redux/userAnswersSlice'
import questions from '../constants/questions'

interface ResultProps {
  pauseTimer: () => void
}

const Result: FC<ResultProps> = ({ pauseTimer }): ReactElement => {
  const userAnswers = useAppSelector(state => state.userAnswers)
  const { timeRemaining } = useAppSelector(state => state.quiz)
  const dispatch = useAppDispatch()

  useEffect(() => {
    pauseTimer()
  }, [])

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

  const handleRestartQuiz = (): void => {
    dispatch(clearUserAnswers())
    dispatch(resetQuiz())
    window.location.reload()
  }

  return (
    <div className="quiz__result">
      {timeRemaining === 0 && <h3>Время вышло!</h3>}
      <h2>Результаты теста</h2>
      <p>Правильных ответов: {correctCount} из {questions.length}</p>
      <button onClick={handleRestartQuiz} className="btn">Перезапустить</button>
    </div>
  )
}

export default Result
