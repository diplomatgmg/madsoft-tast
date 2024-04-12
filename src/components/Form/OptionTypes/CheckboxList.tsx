import React, { type ChangeEvent, type FC, type ReactElement, useState } from 'react'
import type { QuestionCheckbox } from '../../../types/types'
import OptionContainer from '../OptionContainer'
import Label from '../Label'
import { useAppDispatch } from '../../../redux/hooks'
import { setUserAnswer } from '../../../redux/userAnswersSlice'
import _ from 'lodash'

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
        <OptionContainer key={option}>
          <input
            type='checkbox'
            id={index.toString()}
            value={option}
            onChange={handleChangeAnswer}
            checked={selectedOptions.includes(option)}
          />
          <Label text={option} id={index} />
        </OptionContainer>
      ))}
    </>
  )
}

export default CheckboxList
