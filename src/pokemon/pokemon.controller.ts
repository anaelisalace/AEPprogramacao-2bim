import {Request, Response} from 'express'
import { PokemonService } from './pokemon.service'

class PokemonController {

    async salvarPokemon(req: Request, res: Response) {
        const salvar = await new PokemonService().salvarPokemon()
        return res.status(200).json(salvar)
    }

    async lerPokemon(req: Request, res: Response) {
        const ler = await new PokemonService().lerPokemonJSON()
        return res.status(200).json(ler)
    }

    async salvarBanco(req: Request, res: Response) {
        const banco = await new PokemonService().salvarBanco()
        return res.status(200).json(banco)
    }


}

export default new PokemonController()