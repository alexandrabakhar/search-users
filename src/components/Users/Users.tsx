import { useGetUsersByNameQuery } from "../../redux/services/usersApi";
import { IClassName } from "../../types/IClassName";
import { User } from "../User/User";
import * as S from "../../styles/styles";
import { useAppSelector } from "../../redux/hooks";
import { Loader } from "../Loader/Loader";
import { useEffect, useState } from "react";

export const Users = ({ className }: IClassName) => {
	const searchText = useAppSelector((state) => state.filter.search);
	const filterRep = useAppSelector((state) => state.filter.repositories);
	const defaultNameParam = "Q";
	const [isLoader, setIsLoader] = useState(false);

	const paramsObj = {
		name: searchText ? searchText : defaultNameParam,
		orderType: filterRep ? filterRep : "",
	};
	const {
		data: users,
		// isSuccess,
		isFetching,
	} = useGetUsersByNameQuery(paramsObj);

	useEffect(() => {
		setIsLoader(isFetching);
	}, [isFetching]);
	// if (!isSuccess) return;

	const usersArr = users?.items;

	return (
		<S.Users className={className}>
			<Loader isFetching={isLoader} />

			{usersArr?.map((user) => {
				return <User key={user.id} user={user} />;
			})}
		</S.Users>
	);
};
