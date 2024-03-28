import { configureStore } from "@reduxjs/toolkit";
// import interestsReducer from "./slices/interestsSlice.js";
import interestsReducer from "./slices/interestsSlice.js";

export const store = configureStore({
  reducer: {
    interests: interestsReducer,
  },
});
