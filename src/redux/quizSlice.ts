import { createSlice } from '@reduxjs/toolkit'

interface QuizState {
  currentQuestionIndex: number
  timeRemaining: number
  quizFinished: boolean
}

const initialState: QuizState = {
  currentQuestionIndex: 0,
  timeRemaining: 30,
  quizFinished: false
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    updateCurrentQuestionIndex (state: QuizState) {
      state.currentQuestionIndex += 1
    },
    resetQuiz () {
      return initialState
    },
    updateTime (state, action) {
      state.timeRemaining = action.payload
    },
    updateQuizFinished (state, action) {
      state.quizFinished = action.payload
    }
  }
})

export const {
  updateCurrentQuestionIndex,
  resetQuiz,
  updateTime,
  updateQuizFinished
} = quizSlice.actions

export default quizSlice.reducer
export { type QuizState }
