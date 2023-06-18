import TimeModel from './time.schema'
import PokemonModel from '../pokemon/pokemon.schema'

export class TimeService {

    async buscarPokemon(nomePokemon: any) {
        const pokemon = await PokemonModel.findOne({name: nomePokemon})
        return pokemon
    }
    
    async salvarTimeBanco(body: any) {

        const promises = body.team.map(pokemon => {
            return PokemonModel.find({name: pokemon.name})
        })

        const pokemons = await Promise.all(promises).then(pokemons => {
            return pokemons.map(prokemon => {
                return {name: prokemon[0].name}
            })
        })

        await TimeModel.create({trainerName: body.trainerName}, {team: pokemons})
    }

    async findAllTime() {
        const listaTime = await TimeModel.find()
        return listaTime
    }

    async findByTreinador(treinador: any) {
        const timeTreinador = await TimeModel.find({trainerName: treinador})
        return timeTreinador
    }

    async alterarPorTreinador(body: any) {
        const alterado = await TimeModel.findOneAndUpdate({trainerName: body.trainerName})
        return alterado
    }

    async deletarPorTreinador(treinador: any) {
        await TimeModel.findOneAndRemove({trainerName: treinador})
    }

    async findByTipo(tipoParametro: any) {
        const listaPokemon = await PokemonModel.find({tipo: tipoParametro})
        return listaPokemon
    }

    async findByDex(dex: any) {
        const listaPokemon = await PokemonModel.find({numeroDex: dex})
        return listaPokemon
    }

    async findByName(namePokemon: any) {
        const listaPokemon = await PokemonModel.find({name: namePokemon})
        return listaPokemon
    }

}