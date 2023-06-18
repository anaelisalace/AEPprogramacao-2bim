import {Request, Response} from 'express'
import { TimeService} from './time.service'

class TimeController {

    async salvarTime(req: Request, res: Response) {
        const timeSalvo = await new TimeService().salvarTimeBanco(req.body)
        return res.status(200).json(timeSalvo)
    }

    async pegarTime(req: Request, res: Response) {
        const time = await new TimeService().findAllTime()
        return res.status(200).json(time)
    }

    async buscarPorTreinador(req: Request, res: Response) {
        const treinadorTime = await new TimeService().findByTreinador(req.query.treinador)
        return res.status(200).json(treinadorTime)
    }

    async alterarPorTreinador(req: Request, res: Response) {
        const alterado = await new TimeService().alterarPorTreinador(req.body)
        return res.status(200).json(alterado)

    }

    async deletarPorTreinador(req: Request, res: Response) {
        await new TimeService().deletarPorTreinador(req.query.treinador)
        return 'Pokemon deletado com sucesso'
    }

    async buscarPorTipo(req: Request, res: Response) {
        const listaPokemon = await new TimeService().findByTipo(req.query.tipo)
        return res.status(200).json(listaPokemon)
    }

    async buscarPorDex(req: Request, res: Response) {
        const listaPokemon = await new TimeService().findByDex(req.query.dex)
        return res.status(200).json(listaPokemon)
    }

    async buscarPorName(req: Request, res: Response) {
        const listaPokemon = await new TimeService().findByName(req.query.namePokemon)
    }

}

export default new TimeController()