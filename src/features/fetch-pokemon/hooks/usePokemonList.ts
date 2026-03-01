import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "../api/pokemonListApi";
import type { PokemonListResponse } from "../model/pokemonType";

export const usePokemonList = () => {
	const [limit, setLimit] = useState(10);
	const [offset, setOffset] = useState(0);
	const [data, setData] = useState<PokemonListResponse>();
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		async function handlePokemonList() {
			setLoading(true);
			setError(null);
			try {
				const data: PokemonListResponse = await fetchPokemonList({
					limit,
					offset,
					signal: controller.signal,
				});
				if (!controller.signal.aborted) setData(data);
			} catch (error) {
				if (
					error instanceof DOMException &&
					error.name === "AbortError"
				)
					return;
				if (error instanceof Error && !controller.signal.aborted)
					setError(error.message);
			} finally {
				if (!controller.signal.aborted) setLoading(false);
			}
		}
		handlePokemonList();

		return () => {
			controller.abort();
		};
	}, [limit, offset]);

	function handleNext() {
		setOffset((prev) => prev + limit);
	}

	function handlePrevious() {
		setOffset((prev) => Math.max(0, prev - limit));
	}

	return {
		loading,
		error,
		data,
		handleNext,
		handlePrevious,
	};
};

