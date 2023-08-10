import { IClassName } from "../../types/Interfaces";
import { User } from "../User/User";
import * as S from "../../styles/styles";
import { useAppSelector } from "../../redux/hooks";
import { Loader } from "../Loader/Loader";
import { useEffect, useState } from "react";
import { ModalUser } from "../ModalUser/ModalUser";
import axios from "axios";
import { IUser } from "../../types/Interfaces";

export const Users = ({ className }: IClassName) => {
	const searchText = useAppSelector((state) => state.filter.search);
	const filterRep = useAppSelector((state) => state.filter.repositories);

	const [users, setUsers] = useState([] as IUser[]);
	const [fetching, setFetching] = useState(true);

	const [currentPage, setCurrentPage] = useState(1);
	const defaultNameParam = "Q";
	const name = searchText ? searchText : defaultNameParam;

	const GITHUB_TOKEN = "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";
	const URL = filterRep
		? `https://api.github.com/search/users?q=${name}&per_page=30&page=${currentPage}&order=${filterRep}&sort=repositories`
		: `https://api.github.com/search/users?q=${name}&per_page=30&page=${currentPage}`;

	const resetStates = () => {
		setFetching(true);
		setUsers([]);
		setCurrentPage(1);
	};

	useEffect(() => {
		resetStates();
	}, [name, filterRep]);

	const scrollHandler = (e: Event) => {
		const target = e.target as Document;
		if (
			target.documentElement.scrollHeight -
				(target.documentElement.scrollTop + window.innerHeight) <
			300
		) {
			setFetching(true);
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);

		return () => document.removeEventListener("scroll", scrollHandler);
	}, []);

	useEffect(() => {
		if (fetching) {
			axios
				.get(URL, {
					headers: {
						Accept: "application/vnd.github+json",
						Authorization: `Bearer ${GITHUB_TOKEN}`,
						"X-GitHub-Api-Version": "2022-11-28",
					},
				})
				.then((response) => {
					setUsers([...users, ...response.data.items]);
					setCurrentPage((prevState) => prevState + 1);
				})
				.finally(() => setFetching(false));
		}
	}, [URL, fetching, name, users]);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalUserContent, setModalUserContent] = useState({} as IUser);

	const openModalUser = (content: IUser) => {
		setModalUserContent(content);
		setIsModalOpen(true);
	};

	const [isLoader, setIsLoader] = useState(false);
	useEffect(() => {
		setIsLoader(fetching);
	}, [fetching]);

	return (
		<S.Users className={className}>
			<ModalUser
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				modalUserContent={modalUserContent}
			/>
			<Loader isFetching={isLoader} />

			{users.map((user, id) => {
				return (
					<User key={id} user={user} openModalUser={openModalUser} />
				);
			})}
		</S.Users>
	);
};
