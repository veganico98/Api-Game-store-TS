import express, {Router} from 'express'
import auth from '../../middleware/auth'
import gameController from '../../controllers/game/gameController'

const gameRouter: Router = express.Router()

gameRouter.post("/game",auth, gameController.create)

gameRouter.get("/games/sales/:id", gameController.getSalesGames)

gameRouter.get("/game/:id", auth, gameController.show)
gameRouter.patch("/game/:id", auth, gameController.update)
gameRouter.delete("/game/:id", auth, gameController.destroy)

export default gameRouter