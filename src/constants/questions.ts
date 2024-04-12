import { type Question } from '../types/types'

export default [
  {
    id: 1,
    title: 'Какое из этих животных является хищником?',
    type: 'radio',
    correct: 0,
    options: [
      'Лев',
      'Кролик',
      'Кошка'
    ]
  },
  {
    id: 2,
    title: 'Какие из перечисленных фруктов являются кислыми?',
    type: 'checkbox',
    correct: [0, 1],
    options: [
      'Лимон',
      'Яблоко',
      'Апельсин'
    ]
  },
  {
    id: 3,
    title: 'Как называется столица Франции?',
    type: 'text',
    correct: ['Париж']
  },
  {
    id: 4,
    type: 'textarea',
    title: 'На каком фреймворке написан этот сайт?',
    correct: 'React'
  }
] as Question[]
