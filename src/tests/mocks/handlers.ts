import { pokemonHandlers } from "@/features/fetch-pokemon/api/pokemonHandle.msw";
import { usersHandlers } from "@features/users/api/users.msw";

export const handlers = [...usersHandlers, ...pokemonHandlers];
