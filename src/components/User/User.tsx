import { IUser } from "../../types/IUser";
import * as S from "../../styles/styles";

interface IPropsUser {
	user: IUser;
	className?: string;
	handleOpenModalUser: (user: IUser) => void;
}

export const User = ({ user, className, handleOpenModalUser }: IPropsUser) => {
	const { login, avatar_url } = user;
	return (
		<S.User className={className} onClick={() => handleOpenModalUser(user)}>
			<h2>{login}</h2>
			<S.AvatarImg src={avatar_url} alt="Аватар" />
		</S.User>
	);
};
