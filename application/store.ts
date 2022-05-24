import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./features/view";
import problemTypeReducer from "./features/problemType";
export const store = configureStore({
  reducer: {
    view: viewReducer,
    problemType: problemTypeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
