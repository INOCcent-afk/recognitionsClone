import { createSlice } from "@reduxjs/toolkit";

const initialState: StepProps = {
  step1: false,
  step2: false,
  step3: false,
  step4: false,
  step5: false,
  step6: false,
};

type StepProps = {
  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;
  step5: boolean;
  step6: boolean;
};

export const SendFormSlice = createSlice({
  name: "SendForm",
  initialState,
  reducers: {
    step1Done: (state) => {
      return {
        ...state,
        step1: true,
      };
    },
    step2Done: (state) => {
      return {
        ...state,
        step2: true,
      };
    },
    step3Done: (state) => {
      return {
        ...state,
        step3: true,
      };
    },
    step4Done: (state) => {
      return {
        ...state,
        step4: true,
      };
    },
    step5Done: (state) => {
      return {
        ...state,
        step5: true,
      };
    },
    step6Done: (state) => {
      return {
        ...state,
        step6: true,
      };
    },
  },
});

export default SendFormSlice.reducer;
