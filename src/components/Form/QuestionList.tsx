import React, { type FC, type ReactElement } from 'react'
import type { Question } from '../../types/types'
import InputType from './OptionTypes/InputType'
import CheckboxRadioList from './OptionTypes/CheckboxRadioList'
import TextareaType from './OptionTypes/TextareaType'

interface QuestionListProps {
  question: Question
}

const QuestionList: FC<QuestionListProps> = ({ question }): ReactElement => {
  switch (question.type) {
    case 'radio':
    case 'checkbox':
      return <CheckboxRadioList question={question} />
    case 'text':
      return <InputType question={question}/>
    case 'textarea':
      return <TextareaType question={question} />
  }
}

export default QuestionList
