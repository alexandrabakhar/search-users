import { IFilterSliceState } from "../types/Interfaces";
import reducer, {
	setSearch,
	setRepositories,
} from "../redux/slices/filterSlice";
import { describe, expect, it } from "vitest";

describe("filterSlice", () => {
	it("должно вернуть изначальный state", () => {
		expect(reducer(undefined, { type: undefined })).toEqual({
			repositories: "",
			search: "",
		});
	});

	const previousState: IFilterSliceState = {
		repositories: "",
		search: "",
	};

	it("добавление фильтра по репозиториям", () => {
		expect(
			reducer(previousState, setRepositories("Run the tests"))
		).toEqual({ repositories: "Run the tests", search: "" });
	});

	it("добавление фильтра по поиску", () => {
		expect(reducer(previousState, setSearch("Run the tests"))).toEqual({
			repositories: "",
			search: "Run the tests",
		});
	});
});
