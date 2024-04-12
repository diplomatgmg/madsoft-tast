import React, { type ChangeEvent, type FC, type ReactElement, useState } from 'react'
import { type QuestionText } from '../../../types/types'
import Label from '../Label'
import OptionContainer from '../OptionContainer'
import { useAppDispatch } from '../../../redux/hooks'
import { setUserAnswer } from '../../../redux/userAnswersSlice'

interface InputListProps {
  question: QuestionText
}

const InputType: FC<InputListProps> = ({ question }): ReactElement => {
  const [input, setInput] = useState<string>('')

  const dispatch = useAppDispatch()

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const questionId = question.id
    const value = e.target.value.trim()

    setInput(value)
    dispatch(setUserAnswer({ questionId, answer: value }))
  }

  return (
    <OptionContainer key={question.id}>
      <input type='text' id={`option-${question.id}`} onChange={handleChangeInput} value={input} />
      <Label text={''} id={question.id}/>
    </OptionContainer>
  )
}

export default InputType
