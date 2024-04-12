import React, { type FC, type ReactElement } from 'react'
import type { Question } from '../../types/types'
import InputList from './OptionTypes/InputList'
import CheckboxRadioList from './OptionTypes/CheckboxRadioList'
import TextareaList from './OptionTypes/TextareaList'

interface QuestionListProps {
  question: Question
}

const QuestionList: FC<QuestionListProps> = ({ question }): ReactElement => {
  switch (question.type) {
    case 'radio':
    case 'checkbox':
      return <CheckboxRadioList question={question} />
    case 'text':
      return <InputList question={question}/>
    case 'textarea':
      return <TextareaList question={question} />
  }
}

export default QuestionList
