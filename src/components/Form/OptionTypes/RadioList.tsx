import React, { type ChangeEvent, type FC, type ReactElement, useState } from 'react'
import { type QuestionRadio } from '../../../types/types'
import OptionContainer from '../OptionContainer'
import Label from '../Label'
import { useAppDispatch } from '../../../redux/hooks'
import { setUserAnswer } from '../../../redux/userAnswersSlice'

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
        <OptionContainer key={option}>
          <input
            type='radio'
            id={`option-${index}`}
            value={option}
            onChange={handleChangeAnswer}
            checked={selectedOption === option}
          />
          <Label text={option} id={index} />
        </OptionContainer>
      ))}
    </>
  )
}

export default RadioList
