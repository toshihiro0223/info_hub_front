// store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import workSliceReducer from './workSlice'

export const store = configureStore({
  reducer: {
    works: workSliceReducer,
  },
})

// TypeScript 用の型も用意しておくと便利
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch