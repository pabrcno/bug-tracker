import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProblemType from "../../domain/ProblemType/ProblemType";

type ProblemTypeState = {
  selectedProblemType: ProblemType;
};

const initialState = {
  selectedProblemType: {
    title: "",
    description: "",
    id: "",
  },
};

const problemTypeSlice = createSlice({
  name: "problemType",
  initialState,
  reducers: {
    setSelectedProblemType: (
      state: ProblemTypeState,
      action: PayloadAction<ProblemType>
    ) => {
      state.selectedProblemType = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setSelectedProblemType, reset } = problemTypeSlice.actions;

export default problemTypeSlice.reducer;
