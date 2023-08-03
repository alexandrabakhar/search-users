import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const theme = {
	colors: {
		main: "#000",
		hover: "grey",
	},
};

interface ThemeProps {
	children: React.ReactNode;
}

// export const Theme = (props: ThemeProps) => {
// 	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
// };

export const Theme = ({ children }: ThemeProps) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
