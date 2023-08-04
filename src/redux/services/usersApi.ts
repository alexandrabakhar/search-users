import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Response } from "../../types/IResponse";
const BASE_URL = "https://api.github.com/";

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
		// getUsers: builder.query<Response, number>({
		// 	query: (limit = 10) => `?q=Q&per_page=${limit}`,
		// }),
		getUsers: builder.query<Response, number>({
			query: (limit = 10) => ({
				url: `search/users`,
				params: {
					q: "Q",
					per_page: limit,
				},
			}),
		}),
		getUsersByRepositories: builder.query<Response, string>({
			query: (order = "desc") => ({
				url: `search/users`,
				params: {
					q: "Q",
					sort: "repositories",
					order: order,
				},
			}),
		}),
		getUsersByName: builder.query<Response, string>({
			query: (name) => ({
				url: `search/users`,
				params: {
					q: name,
					per_page: 20,
				},
			}),
		}),
		// getUsersByRepositories: builder.query({
		// 	query: (order) => `?q=Q&sort=repositories&order=${order}`,
		// }),
		// getUsersByName: builder.query({
		// 	query: (name) => `?q=${name}`,
		// }),
	}),
});

export const {
	useGetUsersQuery,
	useGetUsersByRepositoriesQuery,
	useGetUsersByNameQuery,
} = usersApi;
