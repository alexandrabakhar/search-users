import { useGetUsersByNameQuery } from "../../redux/services/usersApi";
import { IClassName } from "../../types/IClassName";
import { User } from "../User/User";
import * as S from "../../styles/styles";
import { useAppSelector } from "../../redux/hooks";

export const Users = ({ className }: IClassName) => {
	const searchText = useAppSelector((state) => state.filter.search);
	const filterRep = useAppSelector((state) => state.filter.repositories);
	const defaultNameParam = "Q";

	const paramsObj = {
		name: searchText ? searchText : defaultNameParam,
		orderType: filterRep ? filterRep : "",
	};
	const { data: users, isSuccess } = useGetUsersByNameQuery(paramsObj);

	if (!isSuccess) return;

	const usersArr = users.items;
	return (
		<S.Users className={className}>
			{usersArr.map((user) => {
				return <User key={user.id} user={user} />;
			})}
		</S.Users>
	);
};
