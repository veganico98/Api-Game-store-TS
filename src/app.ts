import express, { Express } from "express"
import publisherRouter from "./routers/publisher"

const app: Express = express()

app.use(express.json())
app.use(publisherRouter)

export default app