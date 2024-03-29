import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    language: "",
    lvl: "",
  },
];

export const skillsSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    addLanguage: (state) => {
      state.push({
        language: "",
        lvl: "",
      });
    },
    deleteLanguage: (state, action) => {
      if (action.payload !== -1) {
        state.splice(action.payload, 1);
      }
    },
    languageChange: (state, action) => {
      const { index, name, value } = action.payload;
      const languageToUpdate = state[index];
      if (languageToUpdate) {
        languageToUpdate[name] = value;
      }
    },
  },
});

export const { addLanguage, deleteLanguage, languageChange } =
  skillsSlice.actions;

export default skillsSlice.reducer;
