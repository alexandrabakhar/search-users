import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState ={
    repositories: string;
    search: string;

}
const initialState: FilterState = {
	repositories: "",
	search: "",
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => ({
			...state,
			search: action.payload,
		}),
		setRepositories: (state, action: PayloadAction<string>) => ({
			...state,
			repositories: action.payload,
		}),
	},
});

export const { setSearch, setRepositories } = filterSlice.actions;

export default filterSlice.reducer;
