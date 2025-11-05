import express, {Router} from 'express'
import auth from '../../middleware/auth'
import gameController from '../../controllers/game/gameController'

const gameRouter: Router = express.Router()

gameRouter.post("/game",auth, gameController.create)

gameRouter.get("/games/sales/:id", gameController.getSalesGames)

export default gameRouter