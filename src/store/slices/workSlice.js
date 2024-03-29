import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    position: "",
    company: "",
    location: "",
    from: "",
    to: "",
    tasks: "",
  },
];

export const workSlice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {
    addWorkExperience: (state) => {
      state.push({
        position: "",
        company: "",
        location: "",
        from: "",
        to: "",
        tasks: "",
      });
    },
    deleteWorkExperience: (state, action) => {
      if (action.payload !== -1) {
        state.splice(action.payload, 1);
      }
    },
    workExperienceChange: (state, action) => {
      const { index, name, value } = action.payload;
      const workExperienceToUpdate = state[index];
      if (workExperienceToUpdate) {
        workExperienceToUpdate[name] = value;
      }
    },
  },
});

export const { addWorkExperience, deleteWorkExperience, workExperienceChange } =
  workSlice.actions;

export default workSlice.reducer;
