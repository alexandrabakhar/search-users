import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.github.com/search/users";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		// tagTypes: ["Repositories", "Name"],
		prepareHeaders: (headers) => {
			const token = import.meta.env.VITE_TOKEN;

			if (token) {
				headers.set("Accept", "application/vnd.github+json");
				headers.set("Authorization", `Bearer ${token}`);
				headers.set("X-GitHub-Api-Version", "2022-11-28");
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<[], null>({
			query: () => "?q=Q",
		}),
        getUsersByRepositories: builder.query<[], string>({
			query: (order) => `?q=Q&sort=repositories&order=${order}`,
		}),
        getUsersByName: builder.query<[], string>({
			query: (name) => `?q=${name}`,
		}),
	}),
});

export const { useGetUsersQuery, useGetUsersByRepositoriesQuery, useGetUsersByNameQuery } = usersApi;
