import { createSlice } from '@reduxjs/toolkit'

type UserAnswersState = Record<number, string>

const initialState: UserAnswersState = {}

const userAnswersSlice = createSlice({
  name: 'userAnswers',
  initialState,
  reducers: {
    setUserAnswer (state, action) {
      const { questionId, answer } = action.payload
      state[questionId] = answer
    },
    clearUserAnswers (state) {
      return initialState
    }
  }
})

export const {
  setUserAnswer,
  clearUserAnswers
} = userAnswersSlice.actions

export default userAnswersSlice.reducer
export { type UserAnswersState }
