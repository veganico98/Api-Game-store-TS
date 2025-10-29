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
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    status: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: 0
    },
})

export default Publisher