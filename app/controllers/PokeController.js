import { AppState } from "../AppState.js";
import { pokeService } from "../services/PokeService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawPokes() {
    let content = ''
    const pokes = AppState.pokes
    pokes.forEach(poke => content += poke.pokesTemplate)
    setHTML('pokes', content)
}

export class PokeController {
    constructor() {
        Pop.success('Poke Controller working!')
        this.getPokes()

        AppState.on('pokes', _drawPokes)
    }

    async getPokes() {
        try {
            await pokeService.getPokes()

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }
}