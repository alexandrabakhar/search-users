import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const theme = {
	colors: {
		main: "#fff",
		hover: "grey",
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
