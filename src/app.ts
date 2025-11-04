import express, { Express } from "express"
import publisherRouter from "./routers/publisher"
import GameRouter from "./routers/game"

const app: Express = express()

app.use(express.json())
app.use(publisherRouter)
app.use(gameRouter)

export default app