import { useGetUsersByNameQuery } from "../../redux/services/usersApi";
import { IClassName } from "../../types/IClassName";
import { User } from "../User/User";
import * as S from "../../styles/styles";
import { useAppSelector } from "../../redux/hooks";
import { Loader } from "../Loader/Loader";
import { useEffect, useState } from "react";
import { ModalUser } from "../ModalUser/ModalUser";
import { IUser } from "../../types/IUser";

export const Users = ({ className }: IClassName) => {
	const searchText = useAppSelector((state) => state.filter.search);
	const filterRep = useAppSelector((state) => state.filter.repositories);
	const defaultNameParam = "Q";
	const [isLoader, setIsLoader] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalUserContent, setModalUserContent] = useState({} as IUser);

	const paramsObj = {
		name: searchText ? searchText : defaultNameParam,
		orderType: filterRep ? filterRep : "",
	};
	const { data: users, isFetching } = useGetUsersByNameQuery(paramsObj);

	useEffect(() => {
		setIsLoader(isFetching);
	}, [isFetching]);

	const usersArr = users?.items;
	const handleOpenModalUser = (content: IUser) => {
		setModalUserContent(content);
		setIsModalOpen(true);
	};
	return (
		<S.Users className={className}>
			<ModalUser
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				modalUserContent={modalUserContent}
			/>
			<Loader isFetching={isLoader} />

			{usersArr?.map((user) => {
				return (
					<User
						key={user.id}
						user={user}
						handleOpenModalUser={handleOpenModalUser}
					/>
				);
			})}
		</S.Users>
	);
};
