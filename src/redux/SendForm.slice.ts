import { createSlice } from "@reduxjs/toolkit";

type StepProps = {
  step1: {
    isDone?: boolean;
    onView?: boolean;
  };
  step2: {
    isDone?: boolean;
    onView?: boolean;
  };
  step3: {
    isDone?: boolean;
    onView?: boolean;
  };
  step4: {
    isDone?: boolean;
    onView?: boolean;
  };
  step5: {
    isDone?: boolean;
    onView?: boolean;
  };
  step6: {
    isDone?: boolean;
    onView?: boolean;
  };
};

const initialState: StepProps = {
  step1: {
    isDone: false,
    onView: true,
  },
  step2: {
    isDone: false,
    onView: false,
  },
  step3: {
    isDone: false,
    onView: false,
  },
  step4: {
    isDone: false,
    onView: false,
  },
  step5: {
    isDone: false,
    onView: false,
  },
  step6: {
    isDone: false,
    onView: false,
  },
};

export const SendFormSlice = createSlice({
  name: "SendForm",
  initialState,
  reducers: {
    step1Done: (state) => {
      return {
        ...state,
        step1: {
          ...state.step1,
          isDone: true,
        },
      };
    },
    step2Done: (state) => {
      return {
        ...state,
        step2: {
          ...state.step2,
          isDone: true,
        },
      };
    },
    step3Done: (state) => {
      return {
        ...state,
        step3: {
          ...state.step3,
          isDone: true,
        },
      };
    },
    step4Done: (state) => {
      return {
        ...state,
        step4: {
          ...state.step4,
          isDone: true,
        },
      };
    },
    step5Done: (state) => {
      return {
        ...state,
        step5: {
          ...state.step5,
          isDone: true,
        },
      };
    },
    step6Done: (state) => {
      return {
        ...state,
        step6: {
          ...state.step6,
          isDone: true,
        },
      };
    },
    //***************** ON VIEW ***********************
    step1View: (state) => {
      return {
        ...state,
        step1: {
          ...state.step1,
          onView: true,
        },
        step2: {
          ...state.step2,
          onView: false,
        },
        step3: {
          ...state.step3,
          onView: false,
        },
        step4: {
          ...state.step4,
          onView: false,
        },
        step5: {
          ...state.step5,
          onView: false,
        },
        step6: {
          ...state.step6,
          onView: false,
        },
      };
    },
    step2View: (state) => {
      return {
        ...state,
        step1: {
          ...state.step1,
          onView: false,
        },
        step2: {
          ...state.step2,
          onView: true,
        },
        step3: {
          ...state.step3,
          onView: false,
        },
        step4: {
          ...state.step4,
          onView: false,
        },
        step5: {
          ...state.step5,
          onView: false,
        },
        step6: {
          ...state.step6,
          onView: false,
        },
      };
    },
    step3View: (state) => {
      return {
        ...state,
        step1: {
          ...state.step1,
          onView: false,
        },
        step2: {
          ...state.step2,
          onView: false,
        },
        step3: {
          ...state.step3,
          onView: true,
        },
        step4: {
          ...state.step4,
          onView: false,
        },
        step5: {
          ...state.step5,
          onView: false,
        },
        step6: {
          ...state.step6,
          onView: false,
        },
      };
    },
    step4View: (state) => {
      return {
        ...state,
        step1: {
          ...state.step1,
          onView: false,
        },
        step2: {
          ...state.step2,
          onView: false,
        },
        step3: {
          ...state.step3,
          onView: false,
        },
        step4: {
          ...state.step4,
          onView: true,
        },
        step5: {
          ...state.step5,
          onView: false,
        },
        step6: {
          ...state.step6,
          onView: false,
        },
      };
    },
    step5View: (state) => {
      return {
        ...state,
        step1: {
          ...state.step1,
          onView: false,
        },
        step2: {
          ...state.step2,
          onView: false,
        },
        step3: {
          ...state.step3,
          onView: false,
        },
        step4: {
          ...state.step4,
          onView: false,
        },
        step5: {
          ...state.step5,
          onView: true,
        },
        step6: {
          ...state.step6,
          onView: false,
        },
      };
    },
    step6View: (state) => {
      return {
        ...state,
        step1: {
          ...state.step1,
          onView: false,
        },
        step2: {
          ...state.step2,
          onView: false,
        },
        step3: {
          ...state.step3,
          onView: false,
        },
        step4: {
          ...state.step4,
          onView: false,
        },
        step5: {
          ...state.step5,
          onView: false,
        },
        step6: {
          ...state.step6,
          onView: true,
        },
      };
    },
    defaultState: () => {
      return initialState;
    },
  },
});

export const {
  step1Done,
  step2Done,
  step3Done,
  step4Done,
  step5Done,
  step6Done,
  // ************* onVIEWS ************
  step1View,
  step2View,
  step3View,
  step4View,
  step5View,
  step6View,
  // ************* birng to default ***********
  defaultState,
} = SendFormSlice.actions;

export default SendFormSlice.reducer;
