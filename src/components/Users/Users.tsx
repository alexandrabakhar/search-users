import { useGetUsersByNameQuery } from "../../redux/services/usersApi";
import { IClassName } from "../../types/IClassName";
import { User } from "../User/User";
import * as S from "../../styles/styles";
import { useAppSelector } from "../../redux/hooks";

export const Users = ({ className }: IClassName) => {
	const searchText = useAppSelector((state) => state.filter.search);
	const { data: users, isSuccess } = useGetUsersByNameQuery(
		searchText ? searchText : "Q"
	);
	if (!isSuccess) return;
    
	const usersArr = users.items;
	return (
		<S.Users className={className}>
			{usersArr.map((user) => {
				// console.log(user);
				return <User key={user.id} user={user} />;
			})}
		</S.Users>
	);
};
