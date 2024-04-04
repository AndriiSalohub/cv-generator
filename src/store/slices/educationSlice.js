import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    schoolName: "",
    degree: "",
    startingDate: "",
    endingDate: "",
  },
];

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state) => {
      state.push({
        schoolName: "",
        degree: "",
        startingDate: "",
        endingDate: "",
      });
    },
    deleteEducation: (state, action) => {
      if (action.payload !== -1) {
        state.splice(action.payload, 1);
      }
    },
    educationChange: (state, action) => {
      const { index, name, value } = action.payload;
      const infoToUpdate = state[index];
      if (infoToUpdate) {
        infoToUpdate[name] = value;
      }
    },
  },
});

export const { addEducation, deleteEducation, educationChange } =
  educationSlice.actions;

export default educationSlice.reducer;
