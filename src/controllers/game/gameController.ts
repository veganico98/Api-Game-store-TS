import { Response, Request } from 'express'
import createGame from "../../services/game/createGame"

const create = async (req: Request, res: Response): Promise<void> => {
    const valid = createGame.validPayload(req.body)

    if (!valid){
        res.status(400)
        res.json({
            message: "Você precisa enviar os campos, name e price"
        })
        return
    }

    res.json({
        message: "Rota de criação"
    })
}

export default {
    create
}