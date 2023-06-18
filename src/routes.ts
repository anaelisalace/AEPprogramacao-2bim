import {Router} from 'express'
import pokemonController from './pokemon/pokemon.controller'
import timeController from './time/time.controller'

const router = Router()

router.get('/salvar-pokemon', pokemonController.salvarPokemon)
router.get('/salvar-banco', pokemonController.salvarBanco)
router.post('/time-salvar', timeController.salvarTime) 
router.get('/time-pokemon', timeController.pegarTime)
router.get('/filtrar-treinador', timeController.buscarPorTreinador) 
router.put('/filtrar-treinador', timeController.alterarPorTreinador) 
router.delete('/filtrar-treinador', timeController.deletarPorTreinador) 
router.get('/filtrar-pokemon-tipo', timeController.buscarPorTipo) 
router.get('/filtrar-pokemon-dex', timeController.buscarPorDex) 
router.get('/filtrar-pokemon-name', timeController.buscarPorName) 

export default router