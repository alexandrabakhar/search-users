import { screen, render } from "@testing-library/react";
import { describe } from "vitest";
import { AllProviders } from "../AllProviders";
import { Loader } from "../components/Loader/Loader";

describe("<ModalUser />", () => {
	it("Рендерится при isFetching = true", () => {
		render(
			<AllProviders>
				<Loader isFetching={true} />
			</AllProviders>
		);

		const UserModal = screen.getByTestId("loader");
		expect(UserModal).toBeInTheDocument();
	});

	it("Не рендерится при isFetching = false", () => {
		render(
			<AllProviders>
				<Loader isFetching={false} />
			</AllProviders>
		);

		expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
	});
});
