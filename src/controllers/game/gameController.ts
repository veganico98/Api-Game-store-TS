import { Response, Request } from 'express'
import gameRepository from '../../Model/game/gameRepository'
import createGameService from '../../services/game/createGameService'

const create = async (req: Request, res: Response): Promise<void> => {
    const publisherId = req.publisher.id
    const valid = createGameService.validPayload(req.body)

    if (!valid){
        res.status(400)
        res.json({
            message: "Você precisa enviar os campos, name e price"
        })
        return
    }

    const hasGameName = await createGameService.hasRegister(req.body.name, publisherId)

    if(!hasGameName){
        res.status(400)
        res.json({
            message: "Game com este nome já existe"
        })
        return
    }

    const newGameService = {
        ...req.body,
        publisherId
    }

    const createGame = await createGameService.create(req.body)

    if (!createGame){
        res.status(500)
        res.json({
            message: "Não foi possível criar o game"
        })
        return
    }

    res.status(201)
    res.json({
        message: "Criado com sucesso",
        newGame: createGame
    })
}

export default {
    create
}