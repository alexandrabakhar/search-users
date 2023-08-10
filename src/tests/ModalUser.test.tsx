import { screen, render } from "@testing-library/react";
import { describe } from "vitest";
import { AllProviders } from "../AllProviders";
import { ModalUser } from "../components/ModalUser/ModalUser";

const mockUser = {
	avatar_url: "https://avatars.githubusercontent.com/u/65956?v=4",
	events_url: "https://api.github.com/users/q/events{/privacy}",
	followers_url: "https://api.github.com/users/q/followers",
	following_url: "https://api.github.com/users/q/following{/other_user}",
	gists_url: "https://api.github.com/users/q/gists{/gist_id}",
	gravatar_id: "",
	html_url: "https://github.com/q",
	id: 65956,
	login: "q",
	node_id: "MDQ6VXNlcjY1OTU2",
	organizations_url: "https://api.github.com/users/q/orgs",
	received_events_url: "https://api.github.com/users/q/received_events",
	repos_url: "https://api.github.com/users/q/repos",
	score: 1,
	site_admin: false,
	starred_url: "https://api.github.com/users/q/starred{/owner}{/repo}",
	subscriptions_url: "https://api.github.com/users/q/subscriptions",
	type: "User",
	url: "https://api.github.com/users/q",
};

describe("<ModalUser />", () => {
	it("Рендерится при isOpen = true", () => {
		render(
			<AllProviders>
				<ModalUser modalUserContent={mockUser} isOpen={true} />
			</AllProviders>
		);

		const UserModal = screen.getByTestId("modal-user");
		expect(UserModal).toBeInTheDocument();
	});

	it("Не рендерится при isOpen = false", () => {
		render(
			<AllProviders>
				<ModalUser modalUserContent={mockUser} isOpen={false} />
			</AllProviders>
		);

		expect(screen.queryByTestId("modal-user")).not.toBeInTheDocument();
	});
});
