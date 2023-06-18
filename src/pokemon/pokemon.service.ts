import {writeFile, readFile} from 'fs/promises'
import PokemonModel from './pokemon.schema'

function getRandomMoves(movesList) {
    const moves: Object[] = []

    while(moves.length != 4){
        let randomNumber = Math.floor(Math.random() * movesList.length)

        if(!moves.includes(moves[randomNumber])){
            moves.push(movesList[randomNumber])
        }
    }

    return moves
}

export class PokemonService {

    async consumirAPI() {
        try {
            const pokemons = await fetch("http://localhost:3000/pokemons-data").then((res)=> {
                return res.json()
            })
            return pokemons
        } catch (error) {
            console.log('Erro ao tentar consumir a API do Pokemon')
        }
    }
    

    async tratarPokemon() {
        const listaPokemon = await this.consumirAPI()

        const pokemonsTratados = listaPokemon.map((pk: any) => {
            let novoPk = {
                name: pk.name,
                tipo: pk.types[0].type.name,
                status: pk.stats[2].stat.name,
                numeroDex: pk.game_indices[9].game_index,
                altura: pk.height,
                peso: pk.weight,
                moves: getRandomMoves(pk.moves)
            }
            return novoPk
        })
        return pokemonsTratados
    }

    async salvarPokemon() {
        const pokemonList = await this.tratarPokemon()
        const salvos = writeFile('PokemonsTratados.json', JSON.stringify(pokemonList, null, 2))
        return salvos
    }

    async lerPokemonJSON() {
        const ler = await readFile('PokemonsTratados.json', "utf-8")
        return ler
    }

    async salvarBanco() {
        const pokemonList = await this.tratarPokemon()
        const banco = await PokemonModel.insertMany(pokemonList)
        return banco
    }

}