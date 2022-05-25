import View from "../../domain/View/view";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type ViewState = {
  view: View | null;
};

const initialState: ViewState = {
  view: null,
};

const challengesSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setView: (state: ViewState, action: PayloadAction<View>) => {
      state.view = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setView, reset } = challengesSlice.actions;

export default challengesSlice.reducer;
