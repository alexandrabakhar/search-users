import * as S from "../../styles/styles";
import { IPropsUser } from "../../types/Interfaces";

export const User = ({ user, className, openModalUser }: IPropsUser) => {
	const { login, avatar_url } = user;
	const handleOpenModalUser = () => {
		openModalUser(user);
	};

	return (
		<S.User
			className={className}
			onClick={handleOpenModalUser}
			data-testid="user"
		>
			<h2>{login}</h2>
			<S.AvatarImg src={avatar_url} alt="Аватар" />
		</S.User>
	);
};
