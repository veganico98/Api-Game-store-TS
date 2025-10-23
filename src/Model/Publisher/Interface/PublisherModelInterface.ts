import { Model } from "@sequelize/core"

interface PublisherModelInterface extends Model {
    id: number,
    name: string,
    password: string
    age: number,
    status: boolean,
    createdAt: string,
    updatedAt: string
}

export default PublisherModelInterface