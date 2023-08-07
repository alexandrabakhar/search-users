import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
	theme: string;
};
const initialState: FilterState = {
	theme: "",
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<string>) => ({
			...state,
			theme: action.payload,
		}),
	},
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
