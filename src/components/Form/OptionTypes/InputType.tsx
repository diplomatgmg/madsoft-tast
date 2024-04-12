import React, { type FC, type ReactElement } from 'react'
import { type QuestionText } from '../../../types/types'
import Label from '../Label'
import OptionContainer from '../OptionContainer'

interface InputListProps {
  question: QuestionText
}

const InputType: FC<InputListProps> = ({ question }): ReactElement => {
  return (
    <OptionContainer key={question.id}>
      <input type='text' id={`${question.id}`} />
      <Label text={''} id={question.id}/>
    </OptionContainer>
  )
}

export default InputType
