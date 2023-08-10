import * as S from "../../styles/styles";
import { IModalUserProps } from "../../types/Interfaces";

export const ModalUser = ({
	isOpen,
	setIsOpen,
	className,
	modalUserContent,
}: IModalUserProps) => {
	const { id, login, html_url, avatar_url } = modalUserContent;
	return (
		isOpen && (
			<S.ModalWrapper
				className={className}
				onClick={() => {
					setIsOpen && setIsOpen(!isOpen);
				}}
				data-testid="modal-user"
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
