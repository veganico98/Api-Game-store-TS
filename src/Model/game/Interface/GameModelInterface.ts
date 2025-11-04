import { Model } from "@sequelize/core"

interface GameModelInterface extends Model {
    name: string,
    price: number,
    publisherId: number
}

export default GameModelInterface 