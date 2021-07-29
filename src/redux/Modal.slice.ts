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
  openCardGif: {
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
    openCardGif: (state) => {
      return {
        ...state,
        openCardGif: {
          isOpen: !state.openCardGif.isOpen,
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
    closeAllModal: () => {
      return initialState;
    },
  },
});

export const {
  openFilterLiveWall,
  openCardDetails,
  openCardFilterMyWall,
  openCardGif,
  closeAllModal,
} = ModalSlice.actions;

export default ModalSlice.reducer;
