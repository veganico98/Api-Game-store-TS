import express, {Router} from 'express'
import auth from '../../middleware/auth'
import gameController from '../../controllers/game/gameController'

const gameRouter: Router = express.Router()

gameRouter.post("/game", gameController.create)

export default gameRouter