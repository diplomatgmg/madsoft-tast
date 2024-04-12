import React, { type FC, type ReactElement } from 'react'
import type { Question } from '../../types/types'
import InputType from './OptionTypes/InputType'
import TextareaType from './OptionTypes/TextareaType'
import CheckboxList from './OptionTypes/Checkbox/CheckboxList'
import RadioList from './OptionTypes/Radio/RadioList'

interface QuestionListProps {
  question: Question
}

const QuestionList: FC<QuestionListProps> = ({ question }): ReactElement => {
  switch (question.type) {
    case 'radio':
      return <RadioList question={question}/>
    case 'checkbox':
      return <CheckboxList question={question} />
    case 'text':
      return <InputType question={question}/>
    case 'textarea':
      return <TextareaType question={question} />
  }
}

export default QuestionList
