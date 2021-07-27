import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currentDate } from "../utils/getCurrentDate";

type CardDataType = {
  date: string;
  receiver: string;
  receiverJobDesc: string;
  icon: string;
  title: string;
  content: string;
  sender: string;
  senderJobDesc: string;
  gif: string;
  cardType: string;
  value: string;
  members: string;
  membersCount: string;
  teamName: string;
};

const initialState: CardDataType = {
  date: currentDate,
  receiver: "",
  receiverJobDesc: "",
  icon: "",
  title: "",
  content: "",
  sender: "",
  senderJobDesc: "",
  gif: "",
  cardType: "",
  value: "",
  members: "",
  membersCount: "",
  teamName: "",
};

const DataSlice = createSlice({
  name: "CardData",
  initialState,
  reducers: {
    setCardReceiver: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        receiver: action.payload,
      };
    },
    setCardReceiverJobDesc: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        receiverJobDesc: action.payload,
      };
    },
    setCardIcon: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        icon: action.payload,
      };
    },
    setCardTitle: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        title: action.payload,
      };
    },
    setCardContent: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        content: action.payload,
      };
    },
    setCardSender: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        sender: action.payload,
      };
    },
    setCardSenderJobDesc: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        senderJobDesc: action.payload,
      };
    },
    setCardGif: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        gif: action.payload,
      };
    },
    setCardType: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        cardType: action.payload,
      };
    },
    setCardValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
    setCardMembers: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        members: action.payload,
      };
    },
    setCardMembersCount: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        membersCount: action.payload,
      };
    },
    setCardTeamName: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        teamName: action.payload,
      };
    },
    setCardDefaultState: () => {
      return initialState;
    },
  },
});

export const {
  setCardReceiver,
  setCardReceiverJobDesc,
  setCardSender,
  setCardSenderJobDesc,
  setCardContent,
  setCardGif,
  setCardIcon,
  setCardMembers,
  setCardMembersCount,
  setCardTitle,
  setCardType,
  setCardValue,
  setCardTeamName,
  setCardDefaultState,
} = DataSlice.actions;

export default DataSlice.reducer;
