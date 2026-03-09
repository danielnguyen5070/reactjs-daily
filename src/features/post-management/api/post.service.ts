import { client } from "@/shared/api/client";
import type { Post } from "@/entities/post/types";
import { isPostList } from "@/entities/post/validate";

export const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const postsService = {
	async getPostList(signal?: AbortSignal): Promise<Post[]> {
		const data = await client<Post[]>({
			url: BASE_URL,
			signal: signal ?? null,
		});

		if (!isPostList(data)) throw new Error("Data does not match");

		return data;
	},

	async deletePost(id: number) {
		return await client<Post[]>({
			url: `${BASE_URL}/${id}`,
			method: "DELETE",
		});
	},
};
