import React, { type ChangeEvent, type FC, type ReactElement, useState } from 'react'
import OptionContainer from '../OptionContainer'
import Label from '../Label'
import { type QuestionTextarea } from '../../../types/types'
import { useAppDispatch } from '../../../redux/hooks'
import { setUserAnswer } from '../../../redux/userAnswersSlice'

interface TextareaListProps {
  question: QuestionTextarea
}

const TextareaType: FC<TextareaListProps> = ({ question }): ReactElement => {
  const [input, setInput] = useState<string>('')

  const dispatch = useAppDispatch()

  const handleChangeInput = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const questionId = question.id
    const { value } = e.target

    setInput(value)
    dispatch(setUserAnswer({ questionId, answer: value.trim() }))
  }

  return (
    <OptionContainer key={question.id}>
      <textarea id={`option-${question.id}`} value={input} onChange={handleChangeInput}/>
      <Label text={''} id={question.id}/>
    </OptionContainer>
  )
}

export default TextareaType
