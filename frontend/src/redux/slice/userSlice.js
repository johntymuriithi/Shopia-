// Create a slice that will eventually give us our reducers

import { createSlice } from "@reduxjs/toolkit";

// create initial state for the user state

const initialState = {
  currentUser: null,
  lightTheme: true,
};

// Create slice with createSlice function

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
    },
    signOut: (state) => {
      state.currentUser = null;
    },
    setTheme: (state, action) => {
      state.lightTheme = action.payload;
    },
  },
});

// export the automatic actions that have been created by the toolkit
export const {
  signInSuccess,
  updateUserSuccess,
  deleteUserSuccess,
  signOut,
  setTheme,
} = userSlice.actions;

// Export the reducers to be combined in the store
export default userSlice.reducer;
