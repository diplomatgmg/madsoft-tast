import React, { type ReactElement } from 'react'
import Form from './Form/Form'
import ProgressBarList from './ProgressBar/ProgressBarList'

const Quiz = (): ReactElement => {

  return (
    <div className="container quiz">
      <div className="quiz__header">
        <p>Тестирование</p>
        <span>16 : 56</span>
      </div>
      <ProgressBarList />
      <Form/>
    </div>
  )
}

export default Quiz
