import { Model } from "@sequelize/core"

interface PublisherModelInterface extends Model {
    id: number,
    name: string,
    password: string,
    email: string,
    age: number,
    status: boolean,
    createdAt: string,
    updatedAt: string
}

export default PublisherModelInterface