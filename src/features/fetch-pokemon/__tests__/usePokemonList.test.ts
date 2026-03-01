import { renderHook, act, waitFor } from "@testing-library/react";
import { usePokemonList } from "../hooks/usePokemonList";
import { http, HttpResponse } from "msw";
import { server } from "@/tests/mocks/server";

describe("usePokemonList (MSW)", () => {
	it("load pokemons list", async () => {
		const { result } = renderHook(() => usePokemonList());
		expect(result.current.loading).toBe(true);

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});

		expect(result.current.data?.results).toHaveLength(2);
		expect(result.current.error).toBeNull();
	});

	it("paginates when handleNext is called", async () => {
		const { result } = renderHook(() => usePokemonList());

		await waitFor(() => expect(result.current.loading).toBe(false));

		act(() => {
			result.current.handleNext();
		});

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});

		expect(result.current.data).toBeDefined();
	});

	it("does not set error when request is aborted", async () => {
		const { result, unmount } = renderHook(() => usePokemonList());

		unmount();

		await Promise.resolve();

		expect(result.current.error).toBeNull();
	});

	it("sets error state when API fails", async () => {
		server.use(
			http.get("https://pokeapi.co/api/v2/pokemon", () => {
				return new HttpResponse(null, { status: 500 });
			}),
		);

		const { result } = renderHook(() => usePokemonList());

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});

		expect(result.current.error).toBeTruthy();
		expect(result.current.data).toBeUndefined();
	});

	it("handles network error", async () => {
		server.use(
			http.get("https://pokeapi.co/api/v2/pokemon", () => {
				return HttpResponse.error(); 
			}),
		);

		const { result } = renderHook(() => usePokemonList());

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});

		expect(result.current.error).toBe("Failed to fetch");
	});
});
