import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import * as S from "../../styles/styles";
import { setSearch } from "../../redux/slices/filterSlice";
import { IClassName } from "../../types/Interfaces";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export const Search = ({ className }: IClassName) => {
	const dispatch = useAppDispatch();
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		dispatch(setSearch(searchText));
	}, [searchText, dispatch]);
	return (
		<S.Search className={className}>
			<input
				placeholder="Поиск"
				onChange={(e) => setSearchText(e.target.value.trim())}
				name="search"
				data-testid="search"
			/>
			<ThemeSwitcher />
		</S.Search>
	);
};
