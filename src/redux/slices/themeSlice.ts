import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IThemeSliceState } from "../../types/Interfaces";

const initialState: IThemeSliceState = {
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
