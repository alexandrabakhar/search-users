import ReactDOM from "react-dom/client";
import { AllProviders } from "./AllProviders.tsx";

import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<AllProviders>
		<App />
	</AllProviders>
);
