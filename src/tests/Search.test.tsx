import { it, expect, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { AllProviders } from "../AllProviders";
import { Search } from "../components/Search/Search";

describe("<Search />", () => {
	it("The input field and its props", () => {
		render(
			<AllProviders>
				<Search />
			</AllProviders>
		);
		const input = screen.getByTestId("search") as HTMLInputElement | null;

		// input exists in the form component
		expect(input).toBeTruthy();

		if (input) {
			// is empty
			expect(input.textContent).toBe("");

			// test the input text
			input.textContent = "jane@doe.com";
			expect(input.textContent).toBe("jane@doe.com");

			// test the type prop
			expect(input.placeholder).toBe("Поиск");

			// test the name prop
			expect(input.name).toBe("search");

			// test the value prop
			fireEvent.change(input, {
				target: {
					value: "john@doe.com",
				},
			});
			expect(input.value).toBe("john@doe.com");
		}
	});
});
