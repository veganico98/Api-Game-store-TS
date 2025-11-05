import {Request, Response} from 'express'
import orderCreateService from '../../services/order/orderCreateService'

const create = async (req: Request, res: Response): Promise<void> => {
    try{
        const body = req.body

        const validPayload = orderCreateService.validPayload(body)

        if(!validPayload){
            res.status(200)
            res.json({
                message: "Você precisa enviar o id, e name"
            })
            return
        }

        const newOrder = {
            gameId: 1,
            name: req.body.name,
            reference: "121212121212121",
            price: 123,
            status: "pendente",
        }


        const order = await orderCreateService.create(newOrder)

        if(!order){
            res.status(500)
            res.json({
                message: "Ocorreu um erro tente novamente",
                order,
                linkCheckout: "url"
            })
        }
        res.json({
        message: "rota de geração de pedidos"
        })
        return
    }catch(error){
        res.status(500)
        res.json({
            message: "Ocorreu um erro"
        })
    }
}

export default {
    create
}