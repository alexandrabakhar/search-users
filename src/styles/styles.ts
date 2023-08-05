import styled from "styled-components";

export const App = styled.div`
	height: 100%;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 5%;
	gap: 20px;
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

	position: relative;
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

	& h2 {
		word-break: break-all;
		align-items: center;
	}

	& img {
		min-height: 50px;
		max-width: 150px;
		background-color: ${(props) => props.theme.colors.img_bgd};
	}
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

		&:hover {
			color: ${(props) => props.theme.colors.main_text_hover};
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
		background-color: ${(props) => props.theme.colors.label_bgd};

		border-radius: 50px;
		cursor: pointer;
	}

	& input:checked + label::before {
		background-color: transparent;
	}
`;
