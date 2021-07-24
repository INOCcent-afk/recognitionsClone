import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openFilterLiveWall: {
    isOpen: false,
  },
  openFilterMyWall: {
    isOpen: false,
  },
  openCardDetails: {
    isOpen: false,
  },
};

export const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    openFilterLiveWall: (state) => {
      return {
        ...state,
        openFilterLiveWall: {
          isOpen: !state.openFilterLiveWall.isOpen,
        },
      };
    },
    openCardFilterMyWall: (state) => {
      return {
        ...state,
        openFilterMyWall: {
          isOpen: !state.openFilterMyWall.isOpen,
        },
      };
    },
    openCardDetails: (state) => {
      return {
        ...state,
        openCardDetails: {
          isOpen: !state.openCardDetails.isOpen,
        },
      };
    },
    closeAllModal: (state) => {
      return {
        ...state,
        openFilterLiveWall: {
          isOpen: false,
        },
        openCardDetails: {
          isOpen: false,
        },
        openFilterMyWall: {
          isOpen: false,
        },
      };
    },
  },
});

export const {
  openFilterLiveWall,
  openCardDetails,
  openCardFilterMyWall,
  closeAllModal,
} = ModalSlice.actions;

export default ModalSlice.reducer;
