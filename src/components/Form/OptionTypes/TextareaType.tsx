import React, { type FC, type ReactElement } from 'react'
import OptionContainer from '../OptionContainer'
import Label from '../Label'
import { type QuestionTextarea } from '../../../types/types'

interface TextareaListProps {
  question: QuestionTextarea
}

const TextareaType: FC<TextareaListProps> = ({ question }): ReactElement => {
  return (
    <OptionContainer key={question.id}>
      <textarea id={`${question.id}`}/>
      <Label text={''} id={question.id}/>
    </OptionContainer>
  )
}

export default TextareaType
