import { useGetUsersQuery } from "../../redux/services/usersApi";
import { IClassName } from "../../types/IClassName";
import { User } from "../User/User";
import * as S from '../../styles/styles';


export const Users = ({ className }: IClassName) => {
	const limit = 15;
	const { data, isSuccess } = useGetUsersQuery(limit);
	if (!isSuccess) return;
	const usersArr = data.items;
	return (
		<S.Users className={className}>
			{usersArr.map((user) => {
				console.log(user.login);
				return <User key={user.id} user={user} />;
			})}
		</S.Users>
	);
};
