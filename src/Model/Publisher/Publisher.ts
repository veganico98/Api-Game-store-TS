import { DataTypes } from "@sequelize/core"
import PublisherModelInterface from "./Interface/PublisherModelInterface";
import connection from "../../config/database";

const Publisher = connection.define<PublisherModelInterface>('publisher', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: 0
    },
})

export default Publisher