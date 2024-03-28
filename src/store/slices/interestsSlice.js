// import { createSlice } from "@reduxjs/toolkit";
//
// const initialState = [
//   {
//     interest: "",
//   },
// ];
//
// export const interestsSlice = createSlice({
//   name: "interests",
//   initialState,
//   reducers: {
//     addInterest: (state, action) => {
//       state.push({
//         interest: action.payload,
//       });
//     },
//     deleteInterest: (state, action) => {
//       const index = state.findIndex((item) => item.interest === action.payload);
//       if (index !== -1) {
//         state.splice(index, 1);
//       }
//     },
//     interestChange: (state, action) => {
//       const { index, name, value } = action.payload;
//       const interestToUpdate = state[index];
//       if (interestToUpdate) {
//         interestToUpdate[name] = value;
//       }
//     },
//   },
// });
//
// export const { addInterest, deleteInterest, interestChange } =
//   interestsSlice.actions;
//
// export default interestsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    skill: "",
  },
];

export const interestsSlice = createSlice({
  name: "interests",
  initialState,
  reducers: {
    addInterest: (state, action) => {
      state.push({
        interest: action.payload,
      });
    },
    deleteInterest: (state, action) => {
      const index = state.findIndex((item) => item.interest === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
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

// Action creators are generated for each case reducer function
export const { addInterest, deleteInterest, interestChange } =
  interestsSlice.actions;

export default interestsSlice.reducer;
