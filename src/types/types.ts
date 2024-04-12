interface QuestionRadio {
  id: number
  title: string
  type: 'radio'
  correct: number
  options: string[]
}

interface QuestionCheckbox {
  id: number
  title: string
  type: 'checkbox'
  correct: number[]
  options: string[]
}

interface QuestionText {
  id: number
  title: string
  type: 'text'
  correct: string[]
}

interface QuestionTextarea {
  id: number
  title: string
  type: 'textarea'
  correct: string
}

type Question = QuestionRadio | QuestionCheckbox | QuestionText | QuestionTextarea

export type { Question, QuestionRadio, QuestionCheckbox, QuestionText, QuestionTextarea }
