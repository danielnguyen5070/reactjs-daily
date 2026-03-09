interface ApiOptions {
	method?: "GET" | "POST" | "PUT" | "DELETE";
	header?: Record<string, string>;
	body?: unknown;
	signal?: AbortSignal | null;
}

export async function client<T = unknown>({
	url,
	method = "GET",
	header = {},
	signal = null,
	body,
}: ApiOptions & { url: string }): Promise<T> {
	const response = await fetch(url, {
		method,
		headers: {
			"Content-Type": "application/json",
			...header,
		},
		body: body ? JSON.stringify(body) : null,
		signal,
	});

	if (!response.ok)
		throw new Error(`Failed to fetch, status: ${response.status}`);

	const data = (await response.json()) as T;
	
	return data;
}
