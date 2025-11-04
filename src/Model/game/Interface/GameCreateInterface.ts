import { Model } from "@sequelize/core"

interface GameCreateInterface extends Model {
    name: string,
    price: number,
    publisherId: number
}

export default GameCreateInterface 