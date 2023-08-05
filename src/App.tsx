import { Search } from "./components/Search/Search";
import { Sorting } from "./components/Sorting/Sorting";
import { Users } from "./components/Users/Users";
// import { useAppSelector } from "./redux/hooks";
import * as S from "./styles/styles";

export const App: React.FC = () => {
	// const content = useAppSelector((state) => state.filter.)
	return (
		<S.App>
			<Search />
			<Sorting />
			<Users />
		</S.App>
	);
};
