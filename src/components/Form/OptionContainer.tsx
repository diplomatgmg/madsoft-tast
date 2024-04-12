import React, { type FC, type ReactElement, type ReactNode } from 'react'

interface OptionContainerProps {
  children: ReactNode
}

const OptionContainer: FC<OptionContainerProps> = ({ children }): ReactElement => {
  return (
  <div className="quiz__option">
    {children}
  </div>
  )
}

export default OptionContainer
