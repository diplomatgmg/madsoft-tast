import React, { type ChangeEvent, type FC, type ReactElement } from 'react'
import Label from '../../Label'
import OptionContainer from '../../OptionContainer'

interface CheckboxItemProps {
  option: string
  index: number
  isChecked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CheckboxItem: FC<CheckboxItemProps> = ({ option, index, onChange, isChecked }): ReactElement => {

  return (
<OptionContainer key={option}>
          <input
            type='checkbox'
            id={`option-${index}`}
            value={option}
            onChange={onChange}
            checked={isChecked}
          />
          <Label text={option} id={index} />
        </OptionContainer>
  )
}

export default CheckboxItem
