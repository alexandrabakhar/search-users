import { screen, render, fireEvent } from "@testing-library/react";
import { User } from "../components/User/User";
import { vi, describe } from "vitest";
import { AllProviders } from "../AllProviders";

describe("<User />", () => {
	it("При нажатии срабатывает событие onClick", () => {
		const cb = vi.fn();
		const mockUser = {
			avatar_url: "https://avatars.githubusercontent.com/u/65956?v=4",
			events_url: "https://api.github.com/users/q/events{/privacy}",
			followers_url: "https://api.github.com/users/q/followers",
			following_url:
				"https://api.github.com/users/q/following{/other_user}",
			gists_url: "https://api.github.com/users/q/gists{/gist_id}",
			gravatar_id: "",
			html_url: "https://github.com/q",
			id: 65956,
			login: "q",
			node_id: "MDQ6VXNlcjY1OTU2",
			organizations_url: "https://api.github.com/users/q/orgs",
			received_events_url:
				"https://api.github.com/users/q/received_events",
			repos_url: "https://api.github.com/users/q/repos",
			score: 1,
			site_admin: false,
			starred_url:
				"https://api.github.com/users/q/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/q/subscriptions",
			type: "User",
			url: "https://api.github.com/users/q",
		};

		render(
			<AllProviders>
				<User user={mockUser} openModalUser={cb} />
			</AllProviders>
		);

		fireEvent.click(screen.getByTestId("user"));
		expect(cb).toBeCalledTimes(1);
	});
});
