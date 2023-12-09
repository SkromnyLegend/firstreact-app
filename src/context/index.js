import { configureStore } from '@reduxjs/toolkit'
import like from './like'
export const store = configureStore({
  reducer: {
    like
  },
})
