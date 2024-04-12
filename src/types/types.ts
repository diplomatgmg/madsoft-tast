interface QuestionBase {
  id: number
  title: string
}

interface QuestionRadio extends QuestionBase {
  type: 'radio'
  correct: number
  options: string[]
}

interface QuestionCheckbox extends QuestionBase {
  type: 'checkbox'
  correct: number[]
  options: string[]
}

interface QuestionText extends QuestionBase {
  type: 'text'
  correct: string[]
}

interface QuestionTextarea extends QuestionBase {
  type: 'textarea'
  correct: string
}

type Question = QuestionRadio | QuestionCheckbox | QuestionText | QuestionTextarea

export type { Question, QuestionRadio, QuestionCheckbox, QuestionText, QuestionTextarea }
