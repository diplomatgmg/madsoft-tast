import React, { type FC, type ReactElement } from 'react'

interface ProgressBarItemProps {
  state: 'completed' | 'current' | 'incomplete'
}

const ProgressBarItem: FC<ProgressBarItemProps> = ({ state }): ReactElement => {
  const className = `quiz__progress-${state}`
  return <div className={className}></div>
}

export default ProgressBarItem
