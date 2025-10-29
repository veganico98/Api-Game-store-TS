import { Request, Response} from 'express'
import createPublisherService from '../../services/publisher/createPublisherService'
import authPublisherService from '../../services/publisher/authPublisherService'

const createPublisher = async (req: Request, res: Response): Promise<void> => {
    const validPayload = createPublisherService.validPayload(req.body)  
    
    if (!validPayload) {
        res.status(400)
        res.json({
            message: "São obrigatórios os campos: Name, email, password"
        })
        return 
    }

    const publisherExist = await createPublisherService.publisherExist(req.body.name)

    if (publisherExist) {
        res.status(400)
        res.json({
            message: "Publisher já existe"
        })
        return
    }

    const newPublisher = await createPublisherService.create(req.body)

        if (!newPublisher){
            res.status(500)
            res.json({
                message: "Não foi possivel criar"
            })
            return
        }

        res.json({
            message: "Publisher criada com sucesso"
        })
    }

    const authPublisher = async (req: Request, res: Response): Promise<void> => {
        const validPayload = authPublisherService.validPayload(req.body)

        if(!validPayload){
            res.status(400)
            res.json({
                message: "Email e senha obrigatorios"
            })
            return
        }

        const publisher = authPublisherService.auth(req.body.email, req.body.password)
        
        res.json({
            message: "Autenticado com sucesso"
        })
    }

const getPublisher = async (req: Request, res: Response): Promise<void> => {
    res.json({
        message: "rota de me para devolver as informação baseada no token"
    })
}

const destroyPublisher = async (req: Request, res: Response): Promise<void> => {
    res.json({
        message: "rota de  deleção"
    })
}

const updatePublisher = async (req: Request, res: Response): Promise<void> => {
    res.json({
        message: "rota de atualização"
    })
}

export default {
    createPublisher,
    authPublisher,
    getPublisher,
    destroyPublisher,
    updatePublisher
}