import { configureStore } from "@reduxjs/toolkit";

import ModalReducer from "./Modal.slice";
import SendFormReducer from "./SendForm.slice";
import DataReducer from "./data.slice";

export const store = configureStore({
  reducer: {
    SendForm: SendFormReducer,
    Modals: ModalReducer,
    CardData: DataReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
