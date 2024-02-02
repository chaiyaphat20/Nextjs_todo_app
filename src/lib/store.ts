import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      authStore: authReducer
    },
    devTools: process.env.NEXT_PUBLIC_ENV !== 'PRD'
  })
}

export const store = makeStore()

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']