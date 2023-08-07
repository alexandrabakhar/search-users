import { IThemeSliceState } from "../types/interfaces";
import reducer, { setTheme } from "../redux/slices/themeSlice";
import { describe, expect, it } from "vitest";

describe("themeSlice", () => {
	it("должно вернуться initial state", () => {
		expect(reducer(undefined, { type: undefined })).toEqual({
			theme: "",
		});
	});

	const previousState: IThemeSliceState = {
		theme: "",
	};

	it("добавление в state тип темы", () => {
		expect(reducer(previousState, setTheme("Test's theme"))).toEqual({
			theme: "Test's theme",
		});
	});
});
