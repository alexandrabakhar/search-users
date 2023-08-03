import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./services/usersApi";
import filterReducer from "./slices/filter";

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		[usersApi.reducerPath]: usersApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([usersApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;