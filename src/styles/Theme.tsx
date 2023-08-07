import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useAppSelector } from "../redux/hooks";
import { IPropsChildren } from "../types/interfaces";

const brightTheme = {
	colors: {
		main_text: "#fff",
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

const dimTheme = {
	colors: {
		main_text: "#fff",
		text_hover: "#000",

		input_text: "#999999",
		bgd: "#999999",
		border_default: "#fff",
		border_accent: "#999999",
		img_bgd: "#fff",
		input_bgd: "#fff",
		label_bgd: "#fff",
		label_checked: "#000",
		modal_text: "#999999",
	},
};

export const Theme = ({ children }: IPropsChildren) => {
	const currentTheme = useAppSelector((state) => state.theme.theme);

	return (
		<ThemeProvider
			theme={currentTheme === "bright" ? dimTheme : brightTheme}
		>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
