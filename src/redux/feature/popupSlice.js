import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupChild: null,
  open: false,
  onClose: () => {},
  popupChildStyle: "",
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopupChild: (state, action) => {
      state.popupChild = action.payload;
    },
    showPopup: (state, action) => {
      return {
        ...state,
        open: action.payload.open,
        onClose: action.payload.onClose || (() => {}),
      };
    },
    setChildStyle: (state, action) => {
      state.popupChildStyle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPopupChild, showPopup, setChildStyle } = popupSlice.actions;

export default popupSlice.reducer;
