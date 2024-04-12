import React, { type FC, type HTMLInputTypeAttribute, type ReactElement } from 'react'

interface InputProps {
  type: HTMLInputTypeAttribute
  id: string | number
}

const Input: FC<InputProps> = ({ type, id }): ReactElement => {
  return <input type={type} id={`option-${id}`}/>
}

export default Input
