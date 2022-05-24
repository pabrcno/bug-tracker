import View from "../../domain/View/view";
import newProblemView from "../../presentation/NewProblemView";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type ViewState = {
  view: View;
};

const initialState: ViewState = {
  view: newProblemView,
};

const challengesSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setView: (state: ViewState, action: PayloadAction<View>) => {
      state.view = action.payload;
    },
  },
});

export const { setView } = challengesSlice.actions;

export default challengesSlice.reducer;
