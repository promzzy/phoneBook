import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./feature/appSlice";
import contactSlice from "./feature/contactSlice";
import popupSlice from "./feature/popupSlice";

const store = configureStore({
  reducer: {
    phoneBook: contactSlice,
    popup: popupSlice,
    app: appSlice,
  },
});

export default store;
