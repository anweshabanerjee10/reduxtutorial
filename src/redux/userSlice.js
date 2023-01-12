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

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const updateUser2 = createAsyncThunk('/users/update', async (user) => {
  const res = await axios.post('http://localhost:8800/api/users/1/update', user)

  return res.data
})

// const deleteUser2 = createAsyncThunk('/user/update', async (user) => {
//   const res = await axios.post('http://localhost:8800/api/users/1/update', user)

//   return res.data
// })

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
    //   updateStart: (state) => {
    //     state.pending = true
    //   },
    //   updateSuccess: (state, action) => {
    //     state.pending = false
    //     state.userInfo = action.payload
    //   },
    //   updateError: (state) => {
    //     state.pending = false
    //     state.error = true
    //   },
  },

  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true
      state.error = false
    },

    [updateUser2.fulfilled]: (state, action) => {
      state.userInfo = action.payload
      state.pending = false
    },

    [updateUser2.rejected]: (state) => {
      state.pending = null
      state.error = true
    },
  },

  // extraReducers: {
  //   [deleteUser2.pending]: (state) => {
  //     state.pending = true
  //     state.error = false
  //   },

  //   [deleteUser2.fulfilled]: (state, action) => {
  //     state.pending = false
  //     state.userInfo = action.payload
  //   },

  //   [deleteUser2.rejected]: (state) => {
  //     state.pending = false
  //     state.error = true
  //   },
  // },
})

export const { updateStart, updateSuccess, updateError } = userSlice.actions

export default userSlice.reducer
