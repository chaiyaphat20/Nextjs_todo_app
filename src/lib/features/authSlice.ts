import { createSlice } from '@reduxjs/toolkit'
import { Session } from 'next-auth'

// Define the initial state
interface AuthState {
  userProfile: Session | null
}

const initialState: AuthState = {
  userProfile: null
}

// Create a slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserProfile: (state, { payload }) => {
      state.userProfile = payload
    }
  }
})

// Export the actions
export const { setUserProfile } = authSlice.actions

// Export the reducer
export default authSlice.reducer
