import { createSlice } from '@reduxjs/toolkit'

interface QuizState {
  currentQuestionIndex: number
  correctAnswers: number
}

const initialState: QuizState = {
  currentQuestionIndex: 0,
  correctAnswers: 0
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addCorrectAnswer (state: QuizState) {
      state.correctAnswers += 1
    },
    updateCurrentQuestionIndex (state: QuizState) {
      state.currentQuestionIndex += 1
    },
    resetQuiz (state: QuizState) {
      state.correctAnswers = 0
      state.currentQuestionIndex = 0
    }
  }
})

export const {
  addCorrectAnswer,
  updateCurrentQuestionIndex,
  resetQuiz
} = quizSlice.actions

export default quizSlice.reducer
export { type QuizState }
