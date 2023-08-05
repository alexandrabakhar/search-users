import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const theme = {
	colors: {
		main_text: "#fff",
		main_text_hover: "#ffc5d8",
		input_text: "#db7093",
		bgd: "#db7093",
		border_default: "#fff",
		border_accent: "#db7093",
		img_bgd: "#fff",
		input_bgd: "#fff",
		label_bgd: "#fff",
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
