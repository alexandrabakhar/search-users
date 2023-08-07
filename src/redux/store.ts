import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filter";
import themeReducer from "./slices/theme";

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		theme: themeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
