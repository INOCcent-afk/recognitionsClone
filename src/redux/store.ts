import { configureStore } from "@reduxjs/toolkit";

import ModalReducer from "./Modal.slice";
import SendFormReducer from "./SendForm.slice";

export const store = configureStore({
  reducer: {
    SendForm: SendFormReducer,
    Modals: ModalReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
