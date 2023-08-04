import { IUser } from "../../types/IUser";
import * as S from "../../styles/styles";

interface IPropsUser {
	user: IUser;
	className?: string;
}

export const User = ({ user, className }: IPropsUser) => {
	const { login, avatar_url } = user;
	return (
		<S.User className={className}>
			<h2>{login}</h2>
			<img src={avatar_url} alt="" />
		</S.User>
	);
};
