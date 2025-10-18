// store/counterSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface Work {
  id: string,
  title: string,
  company: string,
  place: string,
  wage: string,
  condition: string,
  description: string
}

const initialState: Work[] = [];

const workSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
     addWorks: (state, action: PayloadAction<Work[]>) => {
      action.payload.forEach((newWork) => {
        const exists = state.some((w) => w.id === newWork.id);
        if (!exists) {
          state.push(newWork);
        }
      });
    },

    // 単体追加（同様に重複防止）
    addWork: (state, action: PayloadAction<Work>) => {
      const exists = state.some((w) => w.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },

    // 全削除（リセット）
    clearWorks: () => {
      return [];
    },
  }
})

export const { addWorks, addWork, clearWorks } = workSlice.actions
export default workSlice.reducer

