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
`;

export const User = styled.li`
	height: 200px;
	width: 200px;
	color: palevioletred;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	/* background-color: #fff; */
	padding: 10px;

	& img {
		max-height: 150px;
		background-color: white;
	}
`;

export const Search = styled.div`
	width: 70vw;
	/* border-bottom: 1px solid #4e4e4e; */
	border: 2px white solid;

	/* margin-bottom: 51px; */
	display: flex;
	flex-direction: row;
	align-items: center;

	& input {
		flex-grow: 100;
		border: 3px palevioletred solid;
		padding: 13px 10px 14px;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;

		outline: none;
		background-color: white;
		color: palevioletred;

		&::placeholder {
			background-color: transparent;
			color: var(--text-color-main);
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

export const Sorting = styled.div`
	width: 70vw;
	display: grid;

	grid-template-columns: repeat(2, auto);

	& h2 {
		grid-row: 1;
		grid-column: span 2;
	}

	& input {
		display: none;
	}

	& label {
		grid-row: 2;
		display: flex;
		align-items: center;
	}
	& label::before {
		text-align: center;
		width: 12px;
		height: 12px;
		content: "";
		margin-right: 10px;
		display: inline-block;
		border: 1px solid white;
		border-radius: 50px;
		cursor: pointer;

	}

	& input:checked + label::before {
		background-color: white;
	}
`;

// export const Button = styled.button`
// 	width: 200px;
// 	height: 50px;
// 	/* border-radius: 50px; */
// 	border: 2px white solid;
// 	/* background-color: palevioletred;
// 	color: white; */
// 	cursor: pointer;
// 	color: palevioletred;
// 	background-color: white;
// 	& span {
// 		width: 100%;
// 		height: 100%;
// 		display: block;
// 		border: 2px palevioletred solid;
// 		/* background-color: palevioletred; */
// 		color: palevioletred;
// 	}
// `;
