import express, { Express } from "express"
import publisherRouter from "./routers/publisher"
import GameRouter from "./routers/game"
import gameRouter from "./routers/game"
import orderRouter from "./routers/orders"

const app: Express = express()

app.use(express.json())
app.use(publisherRouter)
app.use(gameRouter)
app.use(orderRouter)

export default app