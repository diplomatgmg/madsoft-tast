import React, { type FC, type ReactElement } from 'react'

interface TextareaProps {
  id: string | number
}

const Textarea: FC<TextareaProps> = ({ id }): ReactElement => {
  return <textarea id={`option-${id}`}/>
}

export default Textarea
