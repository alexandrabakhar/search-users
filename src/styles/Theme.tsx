import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const theme = {
	colors: {
		main_text: "#fff",
		// text_hover: "#ffc5d8",
		// text_hover: "#a74f77",
		// text_hover: "#ff94c2",
		// text_hover: "#f9c5d8",
		text_hover: "#000",



		input_text: "#db7093",
		bgd: "#db7093",
		border_default: "#fff",
		border_accent: "#db7093",
		img_bgd: "#fff",
		input_bgd: "#fff",
		label_bgd: "#fff",
		label_checked: "#000",
		modal_text: "#db7093",
	},
};

interface IThemeProps {
	children: React.ReactNode;
}

export const Theme = ({ children }: IThemeProps) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
