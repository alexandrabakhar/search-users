import { Search } from "./components/Search/Search";
import { Users } from "./components/Users/Users";
import * as S from "./styles/styles";

export const App: React.FC = () => {
	return (
		<S.App>
			<Search />
			<Users />
		</S.App>
	);
};
