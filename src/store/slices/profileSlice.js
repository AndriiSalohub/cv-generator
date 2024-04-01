import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileImage: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const { addProfileImage } = profileSlice.actions;

export default profileSlice.reducer;
