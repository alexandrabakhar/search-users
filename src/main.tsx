import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Theme } from "./styles/Theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Theme>
				<App />
			</Theme>
		</Provider>
	</React.StrictMode>
);
