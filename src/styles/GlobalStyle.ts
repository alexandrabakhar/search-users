import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
	    color: ${(props) => props.theme.colors.main};
    }
    body {
        background: palevioletred;
        font-family: 'Courier New', Courier, monospace;
        & input {
        font-family: 'Courier New', Courier, monospace;

        }
        /* font-family: fantasy; */
    }
`;
