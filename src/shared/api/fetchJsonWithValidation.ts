export async function fetchApiWithValidate<T>(
	url: string,
	validation: (data: unknown) => data is T,
	init?: RequestInit,
): Promise<T> {
	const response = await fetch(url, init);

	if (!response.ok)
		throw new Error(`Failed to fetch, status: ${response.status}`);

	const data: unknown = await response.json();

	if (!validation(data)) throw new Error("Data response does not match");

	return data;
}
