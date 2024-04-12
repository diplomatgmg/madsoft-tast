import React, { type FC, type ReactElement } from 'react'
import { type QuestionText } from '../../../types/types'
import Label from '../Label'
import OptionContainer from '../OptionContainer'
import Input from '../Input'

interface InputListProps {
  question: QuestionText
}

const InputType: FC<InputListProps> = ({ question }): ReactElement => {
  return (
    <OptionContainer key={question.id}>
      <Input type={'text'} id={question.id} />
      <Label text={''} id={question.id}/>
    </OptionContainer>
  )
}

export default InputType
