import React, { type FC, type ReactElement } from 'react'

interface LabelProps {
  text: string
  id: string | number
}

const Label: FC<LabelProps> = ({ text, id }): ReactElement => {
  return <label htmlFor={`option-${id}`}>{text}</label>
}

export default Label
