// store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// TypeScript 用の型も用意しておくと便利
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch