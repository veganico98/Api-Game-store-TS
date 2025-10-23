import express, {Router} from 'express'
import publisherController from '../../controllers/publisher/publisherController'

const publisherRouter: Router = express.Router()

publisherRouter.post('/publisher', publisherController.createPublisher)

publisherRouter.post('/auth', publisherController.authPublisher)

publisherRouter.get('/me', publisherController.getPublisher)

publisherRouter.delete('/me', publisherController.destroyPublisher)

publisherRouter.patch('/me', publisherController.updatePublisher)

export default publisherRouter