import { Model } from "@sequelize/core"

interface OrderModelInterface extends Model {
    reference: string,
    name: string,
    price: number,
    status: string,
    publisherId: number
}

export default OrderModelInterface 