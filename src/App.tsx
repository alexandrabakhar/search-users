import { Arrow } from "./components/Arrow/Arrow";
import { Search } from "./components/Search/Search";
import { Sorting } from "./components/Sorting/Sorting";
import { Users } from "./components/Users/Users";
import * as S from "./styles/styles";

export const App: React.FC = () => {
	return (
		<S.App>
			<Search />
			<Sorting />
			<Users />
			<Arrow />
		</S.App>
	);
};
