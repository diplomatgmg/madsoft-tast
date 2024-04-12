import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quizSlice'
import userAnswersReducer from './userAnswersSlice'

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    userAnswers: userAnswersReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
