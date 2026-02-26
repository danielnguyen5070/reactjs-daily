// import { useState, useEffect } from "react";
// import { PageLimit, PokemonListResponse, PAGE_LIMIT, fetchPokemonList, Pokemon } from "./api";

// const PokemonList = () => {
// 	const [limit, setLimit] = useState<PageLimit>(PAGE_LIMIT[0])
// 	const [offset, setOffset] = useState(0)
// 	const [loading, setLoading] = useState(false)
// 	const [error, setError] = useState<string | null>(null)
// 	const [data, setData] = useState<PokemonListResponse | null>(null)

// 	useEffect(() => {
// 		const controller = new AbortController()
// 		let active = true
// 		setError(null)
// 		setLoading(true)

// 		async function handleAPI() {
// 			try {
// 				const response: PokemonListResponse = await fetchPokemonList(limit, offset, controller.signal)
// 				if (active) setData(response)
// 			} catch (error: unknown) {
// 				if (active && error instanceof Error && error.name != "AbortError") setError(`Failed to fetch pokemon list: ${error.message}`)
// 			} finally {
// 				if (active) setLoading(false)
// 			}
// 		}
// 		handleAPI()

// 		return () => {
// 			controller.abort()
// 			active = false
// 		}
// 	}, [offset, limit])

// 	return (
// 		<>
// 			<p>Pokemon List</p>
// 			{
// 				data?.results.map((pokemon) => (
// 					<div key={pokemon.name}>
// 						<p>{pokemon.name}</p>
// 						<p>{pokemon.url}</p>
// 					</div>
// 				))
// 			}
// 			{error && <p className="color-red-500">{error}</p>}
// 			{loading && <p>....</p>}
// 			<div>
// 				<button disabled={!data?.previous} onClick={() => setOffset((prev) => Math.max(0, prev - limit))}>Previous</button>
// 				<button disabled={!data?.next} onClick={() => setOffset((prev) => prev + limit)}>Next</button>
// 			</div>
// 		</>
// 	)
// };

// export default PokemonList;
