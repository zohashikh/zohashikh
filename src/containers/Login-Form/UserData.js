/*import { createSlice } from '@reduxjs/toolkit'

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
export default postsSlice.reducer*/

import { createSlice } from '@reduxjs/toolkit'

      const initialState = [
  { id: '1', email: 'Project 1' ,password:'Nice Project'},
  { id: '2', email: 'Project 2', password:'234' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { postAdded } = postsSlice.actions
export default postsSlice.reducer