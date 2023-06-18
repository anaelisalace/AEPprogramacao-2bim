import {model, Schema} from 'mongoose'

const PokemonSchema = new Schema ({
    name: {type: String},
    tipo: {type: String},
    status: {type: String},
    numeroDex: {type: String},
    altura: {type: String},
    peso: {type: String},
    moves: [{nomeMove: String}]
})

export default model('Pokemons', PokemonSchema)