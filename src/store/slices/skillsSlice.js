import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    skill: "",
  },
];

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state) => {
      state.push({
        skill: "",
      });
    },
    deleteSkill: (state, action) => {
      if (action.payload !== -1) {
        state.splice(action.payload, 1);
      }
    },
    skillChange: (state, action) => {
      const { index, name, value } = action.payload;
      const skillToUpdate = state[index];
      if (skillToUpdate) {
        skillToUpdate[name] = value;
      }
    },
  },
});

export const { addSkill, deleteSkill, skillChange } = skillsSlice.actions;

export default skillsSlice.reducer;
