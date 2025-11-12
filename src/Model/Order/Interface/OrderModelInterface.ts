import { Model } from "@sequelize/core"

interface OrderModelInterface extends Model {
    id: number,
    reference: string,
    name: string,
    price: number,
    status: string,
    gameId: number
}

export default OrderModelInterface 