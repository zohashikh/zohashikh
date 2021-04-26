import { createSlice } from '@reduxjs/toolkit'




const time = new Date().toLocaleTimeString()
      const initialState = [
  { id: '1', title: 'Project 1', content:'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to  consider the form of a webpage or publication, without the meaning of the text influencing the design.d', time:time ,Comment:'Nice Project',comment_time:time},
  { id: '2', title: 'Project 2', content:'Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.', time:time,Comment:'You Should add another module',comment_time:time }
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