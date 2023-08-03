import "./App.css";
import { useGetUsersQuery } from "./redux/services/usersApi";
import { Theme } from "./styles/Theme";

export const App: React.FC = () => {
	// const {data, isSuccess} = useGetUsersQuery(null);
	// if (isSuccess) console.log(data);
	const { data, isSuccess } = useGetUsersQuery(null);
	if (isSuccess) console.log(data);

	return (
		<Theme>
			<div></div>
		</Theme>
	);
};
