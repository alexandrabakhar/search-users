import styled, { keyframes } from "styled-components";

export const App = styled.div`
	height: 100%;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 5%;
	gap: 20px;

	position: relative;
`;

export const Users = styled.ul`
	list-style-type: none;
	width: 70vw;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
	align-items: center;
	justify-items: center;

	gap: 10px;
`;
const appear = keyframes`
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
`;

export const User = styled.li`
	height: 200px;
	width: 200px;
	border: 2px solid ${(props) => props.theme.colors.border_default};

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 10px;
	cursor: pointer;
	transition: border 0.3s linear;

	& h2 {
		word-break: break-word;
		align-items: center;
		transition: color 0.3s;
	}

	animation: ${appear} 0.7s;

	&:hover {
		border: 2px solid ${(props) => props.theme.colors.text_hover};
		& h2 {
			color: ${(props) => props.theme.colors.text_hover};
		}
	}
`;

export const AvatarImg = styled.img`
	min-height: 50px;
	max-width: 150px;
	background-color: ${(props) => props.theme.colors.img_bgd};
`;

export const Search = styled.div`
	width: 70vw;
	border: 2px solid ${(props) => props.theme.colors.border_default};

	display: flex;
	flex-direction: row;
	align-items: center;

	& input {
		flex-grow: 100;
		border: 3px solid ${(props) => props.theme.colors.border_accent};
		padding: 13px 10px 14px;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;

		outline: none;
		background-color: ${(props) => props.theme.colors.input_bgd};
		color: ${(props) => props.theme.colors.input_text};

		&::placeholder {
			color: ${(props) => props.theme.colors.input_text};
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

export const Sorting = styled.div`
	width: 70vw;

	margin-left: 10px;

	& h2 {
		margin-bottom: 10px;
	}

	& input {
		display: none;
	}

	& label {
		cursor: pointer;
		transition: color 0.3s;
		display: inline-flex;
		align-items: center;
		font-weight: bold;
		letter-spacing: 1px;

		margin-right: 20px;
		transition: all 0.3s;

		&:hover {
			color: ${(props) => props.theme.colors.text_hover};
		}
	}
	& label::before {
		text-align: center;
		width: 12px;
		height: 12px;
		content: "";
		margin-right: 10px;
		display: inline-block;
		border: 1px solid ${(props) => props.theme.colors.border_default};

		border-radius: 50px;
		cursor: pointer;
	}
	& input:checked + label {
		color: ${(props) => props.theme.colors.label_checked};
	}

	& input:checked + label::before {
		border: 1px solid ${(props) => props.theme.colors.label_checked};
	}
`;

export const ModalWrapper = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);

	display: flex;
	align-items: center;
	justify-content: center;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	cursor: pointer;

	z-index: 10;
`;

export const Modal = styled.div`
	width: 300px;
	height: 360px;
	background-color: #ffffff;
	border: 2px solid ${(props) => props.theme.colors.border_default};

	cursor: default;
	& * {
		color: ${(props) => props.theme.colors.input_text};
	}
`;

export const ModalContent = styled.div`
	width: 100%;
	height: 100%;
	border: 3px solid ${(props) => props.theme.colors.border_accent};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	cursor: default;
	padding: 20px;
	& * {
		color: ${(props) => props.theme.colors.modal_text};
		/* word-break: break-all; */
		/* hyphens: auto; */
		word-wrap: break-word;
		text-align: center;
	}

	& a:hover {
		color: ${(props) => props.theme.colors.text_hover};
	}
`;

const Svg = styled.svg`
	position: fixed;
	height: 30px;
	width: 30px;
	fill: #fff;
	top: 90%;
	z-index: 10;
	cursor: pointer;
	transition: fill 0.3s;
	&:hover {
		fill: #000;
	}
`;
export const Arrow = styled(Svg)`
	transform: rotate(270deg);
	left: calc(94% - 40px);
`;

export const ThemeSwitcher = styled(Svg)`
	left: calc(99% - 60px);
`;
