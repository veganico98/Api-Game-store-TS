import { Request, Response} from 'express'
import createPublisherService from '../../services/publisher/createPublisherService'
import authPublisherService from '../../services/publisher/authPublisherService'
import destroyPublisherService from '../../services/publisher/destroyPublisherService'
import updatePublisherService from '../../services/publisher/updatePublisherService'
import getPublisherService from '../../services/publisher/getPublisherService'
import publisherRepository from '../../Model/Publisher/publisherRepository'

const createPublisher = async (req: Request, res: Response): Promise<void> => {
    try{
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
    } catch (error) {
        res.status(500)
        res.json({
            mesage: "Ocorreu um erro tente mais tarde"
        })
    }
}

    
    const authPublisher = async (req: Request, res: Response): Promise<void> => {
        try{
            const validPayload = authPublisherService.validPayload(req.body)

            if(!validPayload){
                res.status(400)
                res.json({
                    mesage: "Email e senha obrigatorios"
                })
                return
            }

            const publisher = await authPublisherService.auth(req.body.email, req.body.password)

            if(!publisher){
                res.status(400)
                res.json({
                    mesage: "Email ou senhas inválidos"
                })
                return
            }
            const token = authPublisherService.createToken(publisher)

            if(!token){
                res.status(500)
                res.json({
                    mesage: "Houve um erro ao gerar o token"
                })
                return
            }
            res.json(token)
        }catch (error){
            res.status(500)
            res.json({
                mesage: "Ocorreu um erro tente mais tarde"
            })
        }
    }

const getPublisher = async (req: Request, res: Response): Promise<void> => {
    res.json({
        publisher: {
            name: req.publisher.name,
            email: req.publisher.email,
            id: req.publisher.id
        }
    })
}

const destroyPublisher = async (req: Request, res: Response): Promise<void> => {
    try{
        const destroyed = await destroyPublisherService.destroy(req.publisher.id)
        if(!destroyed){
            res.status(400)
            res.json({
                mesage: "Não foi possivel deletar o usuário"
            })
            return
        }

        res.status(200)
        res.json({
            mesage: "Usuário deletado com sucesso"
        })
        }catch (error: any){
            res.status(500)
            res.json({
                mesage: "Ocorreu um erro tente novamente mais tarde"
        })
    }
}

const updatePublisher = async (req: Request, res: Response): Promise<void> => {
    try{
        const updated = await updatePublisherService.updatePublisher(req.body, req.publisher.id)

        if(!updated){
            res.status(400)
            res.json({
                mesage: "Não foi possivel atualizar o usuário"
            })
            return
        }

        res.status(200)
        res.json({
            mesage: "Usuário atualizado com sucesso"
        })
    }catch(error){
        res.status(500)
        res.json({
            mesage: "Ocorreu um erro tente novamente mais tarde"
        })
    }
}

const getPublishers = async (req: Request, res: Response): Promise<void> => {
    try{
        const publishers = await getPublisherService.getPublishers();

        res.json({
            total: publishers.length,
            publishers
        })
    }catch (error){
        res.status(500)
        res.json({
            message: "Houve um erro interno"
        })
    }
}

const getPublisherAdmin = async (req: Request, res: Response): Promise<void> => {
    try{
        const email = req.params.email
        const publisher = await publisherRepository.findByEmail(email)

        res.json({
            publisher
        })
    }catch(error){
        res.status(500)
        res.json({
            message: "Houve um erro interno"
        })
    }
}

export default {
    createPublisher,
    authPublisher,
    getPublisher,
    destroyPublisher,
    updatePublisher,
    getPublishers,
    getPublisherAdmin
}