import { configureStore } from "@reduxjs/toolkit";
import interestsReducer from "./slices/interestsSlice.js";
import generalInformationReducer from "./slices/generalInformationSlice.js";
import educationReducer from "./slices/educationSlice.js";
import workReducer from "./slices/workSlice.js";
import skillsReducer from "./slices/skillsSlice.js";
import languagesReducer from "./slices/languagesSlice.js";
import profileReducer from "./slices/profileSlice.js";

export const store = configureStore({
  reducer: {
    interests: interestsReducer,
    generalInformation: generalInformationReducer,
    education: educationReducer,
    workExperience: workReducer,
    skills: skillsReducer,
    languages: languagesReducer,
    profile: profileReducer,
  },
});
