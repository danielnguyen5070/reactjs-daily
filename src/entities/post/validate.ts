import type { Post } from "./types";

export function isPost(data: unknown): data is Post {
	if (data === null || typeof data !== "object") return false;

	const d = data as Record<string, unknown>;

	return (
		typeof d.id === "number" &&
		typeof d.userId === "number" &&
		typeof d.title === "string" &&
		typeof d.body === "string"
	);
}

export function isPostList(data: unknown): data is Post[] {
	return Array.isArray(data) && data.every(isPost);
}
