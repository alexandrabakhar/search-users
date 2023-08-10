import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Theme } from "./styles/Theme";
import { IPropsChildren } from "./types/Interfaces";

export const AllProviders = ({ children }: IPropsChildren) => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<Theme>{children}</Theme>
			</Provider>
		</React.StrictMode>
	);
};
