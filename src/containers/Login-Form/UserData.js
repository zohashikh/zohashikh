import { createSlice } from '@reduxjs/toolkit'

      const initialState = [
  { id: '1', email: 'Zoha@gmail.com', password:'1234' }
]

const postsSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { userAdded } = postsSlice.actions
export default postsSlice.reducer