import React, { type FormEvent, type ReactElement } from 'react'
import questions from '../../constants/questions'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import QuestionList from './QuestionList'
import { updateCurrentQuestionIndex } from '../../redux/quizSlice'

const Form = (): ReactElement => {
  const { currentQuestionIndex } = useAppSelector((state) => state.quiz)

  const dispatch = useAppDispatch()

  const currentQuestion = questions[currentQuestionIndex]

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    dispatch(updateCurrentQuestionIndex())
  }

  return (
    <form className="quiz__form" onSubmit={handleSubmit}>
      <p className="quiz__question-name">{currentQuestion.title}</p>
      <QuestionList question={currentQuestion}/>
      <button type="submit" className="btn">Ответить</button>
    </form>
  )
}

export default Form
