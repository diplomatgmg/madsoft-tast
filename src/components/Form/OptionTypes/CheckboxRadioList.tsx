import React, { type FC, type ReactElement } from 'react'
import type { QuestionCheckbox, QuestionRadio } from '../../../types/types'
import OptionContainer from '../OptionContainer'
import Label from '../Label'

interface CheckboxRadioListProps {
  question: QuestionRadio | QuestionCheckbox
}

const CheckboxRadioList: FC<CheckboxRadioListProps> = ({ question }): ReactElement => (
  <>
    {question.options.map((option, index) => (
      <OptionContainer key={option}>
        <input type={question.type} id={`${index + 1}`} />
        <Label text={option} id={index + 1} />
      </OptionContainer>
    ))}
  </>
)

export default CheckboxRadioList
