import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import { filterReducer } from "./filtersSlice";
import authSlice from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: authSlice,
  },
});
