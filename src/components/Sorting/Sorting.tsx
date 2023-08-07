import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setRepositories } from "../../redux/slices/filterSlice";
import * as S from "../../styles/styles";

export const Sorting = () => {
	const selectedRepositories = useAppSelector(
		(state) => state.filter.repositories
	);
	const dispatch = useAppDispatch();

	const handleSelectFilter = (
		target: HTMLInputElement,
		filterType: string
	) => {
		if (selectedRepositories.includes(filterType)) {
			target.checked = false;
			dispatch(setRepositories(""));
		} else if (!selectedRepositories.includes(filterType)) {
			target.checked = true;
			dispatch(setRepositories(filterType));
		}
	};

	return (
		<S.Sorting>
			<h2>Сортировка по количеству репозиториев:</h2>
			<input
				type="radio"
				id="asc"
				name="repositories"
				value="по возрастанию"
				onClick={(e) => {
					const target = e.target as HTMLInputElement;
					handleSelectFilter(target, "asc");
				}}
			></input>
			<label htmlFor="asc">по возрастанию</label>
			<input
				type="radio"
				id="desc"
				name="repositories"
				value="по убыванию"
				onClick={(e) => {
					const target = e.target as HTMLInputElement;
					handleSelectFilter(target, "desc");
				}}
			></input>
			<label htmlFor="desc">по убыванию</label>
		</S.Sorting>
	);
};
