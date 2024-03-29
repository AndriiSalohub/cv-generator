import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "",
    lastName: "",
    profession: "",
    location: "",
    linkedIn: "",
    portfolio: "",
    email: "",
    phoneNumber: "",
    description: "",
  },
];

export const generalInformationSlice = createSlice({
  name: "generalInformation",
  initialState,
  reducers: {
    generalInformationChange: (state, action) => {
      const { name, value } = action.payload;
      state[0][name] = value;
    },
  },
});

export const { generalInformationChange } = generalInformationSlice.actions;
export default generalInformationSlice.reducer;
