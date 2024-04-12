import React, { type ReactElement } from 'react'
import questions from '../../constants/questions'
import { useAppSelector } from '../../redux/hooks'
import ProgressBarItem from './ProgressBarItem'
import _ from 'lodash'

const ProgressBarList = (): ReactElement => {
  const { currentQuestionIndex } = useAppSelector(state => state.quiz)
  const questionsLength = questions.length

  const renderProgressItems = (): ReactElement[] => {
    const items = Array.from({ length: questionsLength })

    return items.map((item, index) => {
      if (index < currentQuestionIndex) {
        return <ProgressBarItem state={'completed'} key={_.uniqueId()}/>
      }

      if (index === currentQuestionIndex) {
        return <ProgressBarItem state={'current'} key={_.uniqueId()}/>
      }

      return <ProgressBarItem state={'incomplete'} key={_.uniqueId()}/>
    })
  }

  return (
   <div className="quiz__progress">
     {renderProgressItems()}
   </div>
  )
}

export default ProgressBarList
