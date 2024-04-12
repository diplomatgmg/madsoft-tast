import React, { type ChangeEvent, type FC, type ReactElement } from 'react'
import Label from '../../Label'
import OptionContainer from '../../OptionContainer'

interface RadioItemProps {
  option: string
  index: number
  isChecked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioItem: FC<RadioItemProps> = ({ option, index, onChange, isChecked }): ReactElement => {

  return (
    <OptionContainer key={option}>
      <input
        type='radio'
        id={`option-${index}`}
        value={option}
        onChange={onChange}
        checked={isChecked}
      />
      <Label text={option} id={index}/>
    </OptionContainer>
  )
}

export default RadioItem
