import React, { type ChangeEvent, type FC, type ReactElement, useState } from 'react'
import type { QuestionCheckbox } from '../../../../types/types'
import { useAppDispatch } from '../../../../redux/hooks'
import { setUserAnswer } from '../../../../redux/userAnswersSlice'
import _ from 'lodash'
import CheckboxItem from './CheckboxItem'

interface CheckboxListProps {
  question: QuestionCheckbox
}

const CheckboxList: FC<CheckboxListProps> = ({ question }): ReactElement => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const dispatch = useAppDispatch()
  const handleChangeAnswer = (e: ChangeEvent<HTMLInputElement>): void => {
    const optionValue = e.target.value
    const questionId = question.id
    const difference = _.xor(selectedOptions, [optionValue])

    setSelectedOptions(difference)
    dispatch(setUserAnswer({ questionId, answer: difference.sort() }))
  }

  return (
    <>
      {question.options.map((option, index) => (
        <CheckboxItem
          key={_.uniqueId()}
          onChange={handleChangeAnswer}
          option={option}
          index={index}
          isChecked={selectedOptions.includes(option)}
        />
      ))}
    </>
  )
}

export default CheckboxList
