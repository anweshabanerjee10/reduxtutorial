// import { createSlice } from '@reduxjs/toolkit'

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     userInfo: {
//       name: 'Anna',
//       email: 'Anna@gmail.com',
//     },

//     pending: false,
//     error: false,
//   },

//   reducers: {
//     updateStart: (state) => {
//       state.pending = true
//     },
//     updateSuccess: (state, action) => {
//       state.pending = false
//       state.userInfo = action.payload
//     },

//     updateError: (state) => {
//       state.error = true
//       state.pending = false
//     },
//   },
// })

// export const { updateStart, updateSuccess, updateError } = userSlice.actions

// export default userSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      name: 'john',
      email: 'john@email.com',
    },
    pending: null,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true
    },
    updateSuccess: (state, action) => {
      state.pending = false
      state.userInfo = action.payload
    },
    updateError: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export const { updateStart, updateSuccess, updateError } = userSlice.actions

export default userSlice.reducer
