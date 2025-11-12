import { Model } from "@sequelize/core"

interface GameModelInterface extends Model {
    id: number,
    name: string,
    price: number,
    publisherId: number
}

export default GameModelInterface 