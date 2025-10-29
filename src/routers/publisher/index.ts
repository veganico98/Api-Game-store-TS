import express, {Router} from 'express'
import publisherController from '../../controllers/publisher/publisherController'
import auth from '../../middleware/auth'

const publisherRouter: Router = express.Router()

publisherRouter.post('/publisher', publisherController.createPublisher)

publisherRouter.post('/auth', publisherController.authPublisher)

publisherRouter.get('/me', auth, publisherController.getPublisher)

publisherRouter.delete('/me', auth, publisherController.destroyPublisher)

publisherRouter.patch('/me',auth, publisherController.updatePublisher)

export default publisherRouter