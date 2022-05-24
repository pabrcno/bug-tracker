import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProblemType from "../../domain/ProblemType/ProblemType";
import { problemTypes } from "../../utils/devConstants";

type ProblemTypeState = {
  selectedProblemType: ProblemType;
  problemTypes: ProblemType[];
};

const initialState = {
  selectedProblemType: {
    title: "",
    description: "",
    id: "",
  },
  problemTypes: problemTypes,
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
