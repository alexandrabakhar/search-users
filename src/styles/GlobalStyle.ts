import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
	    color: ${(props) => props.theme.colors.main_text};
    }
    body {
        background: ${(props) => props.theme.colors.bgd};
        font-family: 'Courier New', Courier, monospace;
        & input {
            font-family: 'Courier New', Courier, monospace;
        }
        & button {
            font-family: 'Courier New', Courier, monospace;
        }
    }
`;
