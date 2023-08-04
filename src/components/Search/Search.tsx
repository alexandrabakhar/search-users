import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import * as S from "../../styles/styles";
import { setSearch } from "../../redux/slices/filter";

interface IClassName {
	className?: string;
}
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
			/>
		</S.Search>
	);
};
