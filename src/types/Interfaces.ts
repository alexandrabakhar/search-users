export type IUser = {
	avatar_url: string;
	events_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	gravatar_id: string | number;
	html_url: string;
	id: number;
	login: string;
	node_id: string;
	organizations_url: string;
	received_events_url: string;
	repos_url: string;
	score: number;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	type: string;
	url: string;
};
export interface IFilterSliceState {
	repositories?: string;
	search?: string;
}

export interface IThemeSliceState {
	theme: string;
}

export interface IClassName {
	className?: string;
}

export interface IIsFetching {
	isFetching: boolean;
}

export interface IModalUserProps {
	isOpen: boolean;
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	className?: string;
	modalUserContent: IUser;
}

export interface IPropsUser {
	user: IUser;
	className?: string;
	openModalUser: (user: IUser) => void;
	onClick?: () => void;
}

export interface IPropsChildren {
	children: React.ReactNode;
}
