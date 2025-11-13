import { Response, Request } from 'express'
import gameRepository from '../../Model/game/gameRepository'
import salesGamesServices from '../../services/game/salesGamesServices'
import createGameService from '../../services/game/createGAmeService'

const create = async (req: Request, res: Response): Promise<void> => {
    const publisherId = req.publisher?.id
    const valid = createGameService.validPayload(req.body)

    if (!valid){
        res.status(400)
        res.json({
            message: "Você precisa enviar os campos, name e price"
        })
        return
    }

    const hasGameName = await createGameService.hasRegister(req.body.name, publisherId)

    if(hasGameName){
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

const getSalesGames = async (req: Request, res: Response) => {
    if(!req.params.id){
        res.status(400)
        res.json({
            message: "O Id é obrigatório"
        })
        return
    }

    const games = await salesGamesServices.getAllById(parseInt(req.params.id))

    if (!games){
        res.status(404)
        res.json({
            message: "Nenhum dado encontrado"
        })
        return
    }

    res.json({
        message: "Busca realizada com sucesso",
        games
    })
}

const show = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    if (!id) {
        res.status(400)
        res.json({ message: "O id é obrigatório" })
        return
    }
    const game = await gameRepository.findById(id)
    if (!game || game.publisherId !== req.publisher.id) {
        res.status(404)
        res.json({ message: "Produto não encontrado" })
        return
    }
    res.json({ game })
}

const destroy = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    if (!id) {
        res.status(400)
        res.json({ message: "O id é obrigatório" })
        return
    }
    const game = await gameRepository.findById(id)
    if (!game || game.publisherId !== req.publisher.id) {
        res.status(404)
        res.json({ message: "Produto não encontrado" })
        return
    }
    const ok = await gameRepository.destroy(id)
    if (!ok) {
        res.status(400)
        res.json({ message: "Não foi possível deletar o produto" })
        return
    }
    res.json({ message: "Produto deletado com sucesso" })
}

const update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    if (!id) {
        res.status(400)
        res.json({ message: "O id é obrigatório" })
        return
    }
    const game = await gameRepository.findById(id)
    if (!game || game.publisherId !== req.publisher.id) {
        res.status(404)
        res.json({ message: "Produto não encontrado" })
        return
    }

    const fields: Array<keyof typeof game> = ["name" as any, "price" as any]
    const payload: any = {}
    let hasField = false
    for (const f of fields) {
        if ((req.body as any)[f] !== undefined && (req.body as any)[f] !== "") {
            payload[f] = (req.body as any)[f]
            hasField = true
        }
    }
    if (!hasField) {
        res.status(400)
        res.json({ message: "Envie ao menos um campo para atualizar" })
        return
    }

    if (payload.name && payload.name !== game.name) {
        const exists = await gameRepository.findByName(payload.name, { publisherId: req.publisher.id })
        if (exists && exists.id !== game.id) {
            res.status(400)
            res.json({ message: "Esse sku já existe, escolha outro" })
            return
        }
    }

    const ok = await gameRepository.update(payload, id)
    if (!ok) {
        res.status(400)
        res.json({ message: "Não foi possível atualizar o produto" })
        return
    }
    res.json({ message: "Produto atualizado com sucesso" })
}


export default {
    create,
    getSalesGames,
    destroy,
    update,
    show
}