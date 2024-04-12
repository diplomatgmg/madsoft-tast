import React, { type ChangeEvent, type FC, type ReactElement, useState } from 'react'
import { type QuestionRadio } from '../../../../types/types'
import OptionContainer from '../../OptionContainer'
import Label from '../../Label'
import { useAppDispatch } from '../../../../redux/hooks'
import { setUserAnswer } from '../../../../redux/userAnswersSlice'
import RadioItem from './RadioItem'
import _ from 'lodash'

interface RadioListProps {
  question: QuestionRadio
}

const RadioList: FC<RadioListProps> = ({ question }): ReactElement => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const dispatch = useAppDispatch()

  const handleChangeAnswer = (e: ChangeEvent<HTMLInputElement>): void => {
    const questionId = question.id

    setSelectedOption(e.target.value)
    dispatch(setUserAnswer({ questionId, answer: e.target.value }))
  }

  return (
    <>
      {question.options.map((option, index) => (
        <RadioItem
          key={_.uniqueId()}
          option={option}
          index={index}
          isChecked={selectedOption === option}
          onChange={handleChangeAnswer}
        />
      ))}
    </>
  )
}

export default RadioList
