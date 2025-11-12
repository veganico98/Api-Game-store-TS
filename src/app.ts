import express, { Express } from "express"
import publisherRouter from "./routers/publisher"
import GameRouter from "./routers/game"
import gameRouter from "./routers/game"
import orderRouter from "./routers/orders"
// import AdminRoute from './components/AdminRoute'
// import AdminOrders from './pages/AdminOrders'
// import AdminUsers from './pages/AdminUsers'

const app: Express = express()

app.use(express.json())
app.use(publisherRouter)
app.use(gameRouter)
app.use(orderRouter)

export default app