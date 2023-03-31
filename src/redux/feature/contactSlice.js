import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "setContacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setContacts } = contactSlice.actions;

export default contactSlice.reducer;
