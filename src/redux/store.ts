import { configureStore } from "@reduxjs/toolkit";

import SendFormReducer from "./SendForm.slice";

export const store = configureStore({
  reducer: {
    SendForm: SendFormReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
