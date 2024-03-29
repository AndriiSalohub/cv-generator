import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    interest: "",
  },
];

export const interestsSlice = createSlice({
  name: "interests",
  initialState,
  reducers: {
    addInterest: (state) => {
      state.push({
        interest: "",
      });
    },
    deleteInterest: (state, action) => {
      if (action.payload !== -1) {
        state.splice(action.payload, 1);
      }
    },
    interestChange: (state, action) => {
      const { index, name, value } = action.payload;
      const interestToUpdate = state[index];
      if (interestToUpdate) {
        interestToUpdate[name] = value;
      }
    },
  },
});

export const { addInterest, deleteInterest, interestChange } =
  interestsSlice.actions;

export default interestsSlice.reducer;
