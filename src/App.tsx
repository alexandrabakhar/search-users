import "./App.css";
import {  useGetUsersQuery } from "./redux/services/usersApi";

export const App: React.FC = () => {
	// const {data, isSuccess} = useGetUsersQuery(null);
	// if (isSuccess) console.log(data);
	const {data, isSuccess} = useGetUsersQuery(null);
	if (isSuccess) console.log(data);
	return <div />;
};
