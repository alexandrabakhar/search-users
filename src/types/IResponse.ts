import { IUser } from "./IUser";

export interface Response {
	incomplete_results: boolean;
	items: IUser[];
	total_count: number;
}
