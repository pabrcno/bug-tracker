import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import NewProblem from "../../domain/NewProblem/NewProblem";
import ProblemType from "../../domain/ProblemType/ProblemType";

type NewProblemState = {
  newProblem: NewProblem;
  isSendCheckbox: boolean;
};

const initialState: NewProblemState = {
  newProblem: {
    issuerEmail: "",
    description: "",
    problemType: {
      title: "",
      description: "",
      id: "",
    },
  },
  isSendCheckbox: false,
};

const newProblemSlice = createSlice({
  name: "newProblem",
  initialState,
  reducers: {
    setIssuerEmail: (state: NewProblemState, action: PayloadAction<string>) => {
      state.newProblem.issuerEmail = action.payload;
    },
    setDescription: (state: NewProblemState, action: PayloadAction<string>) => {
      state.newProblem.description = action.payload;
    },
    setProblemType: (
      state: NewProblemState,
      action: PayloadAction<ProblemType>
    ) => {
      state.newProblem.problemType = action.payload;
    },
    toggleCheckbox: (state: NewProblemState) => {
      state.isSendCheckbox = !state.isSendCheckbox;
    },
  },
});

export const {
  setIssuerEmail,
  setDescription,
  setProblemType,
  toggleCheckbox,
} = newProblemSlice.actions;

export default newProblemSlice.reducer;
