import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./features/view";
import problemTypeReducer from "./features/problemType";
import newProblemReducer from "./features/newProblem";
export const store = configureStore({
  reducer: {
    view: viewReducer,
    problemType: problemTypeReducer,
    newProblem: newProblemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
