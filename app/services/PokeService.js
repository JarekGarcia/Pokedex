import { AppState } from "../AppState.js";
import { Poke } from "../models/Poke.js";
import { pokeApi } from "./AxiosService.js"

class PokeService {
    async getPokes() {
        const res = await pokeApi.get()
        console.log('pokemons', res.data);
        const newPokes = res.data.results.map(POJOpoke => new Poke(POJOpoke))

        AppState.pokes = newPokes
        console.log('pokes in the appstate', AppState.pokes);

    }

}

export const pokeService = new PokeService()