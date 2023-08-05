import * as S from "../../styles/styles";
import { IUser } from "../../types/IUser";

interface IModalUserProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	className?: string;
	modalUserContent: IUser;
}
export const ModalUser = ({
	isOpen,
	setIsOpen,
	className,
	modalUserContent,
}: IModalUserProps) => {
	console.log(modalUserContent);
	const { id, login, html_url, avatar_url } = modalUserContent;
	return (
		isOpen && (
			<S.ModalWrapper
				className={className}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<S.Modal onClick={(e) => e.stopPropagation()}>
					<S.ModalContent>
						<h2>Login: {login}</h2>
						<h2>Id: {id}</h2>
						<a target="_blank" href={html_url}>
							Аккаунт на гитхаб
						</a>
						<S.AvatarImg src={avatar_url} alt="Аватар" />
					</S.ModalContent>
				</S.Modal>
			</S.ModalWrapper>
		)
	);
};
