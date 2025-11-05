import { DataTypes } from "@sequelize/core"
import connection from "../../config/database";
import OrderModelInterface from "./Interface/OrderModelInterface";
import { Order } from "sequelize";

const Order = connection.define<OrderModelInterface>('order', {
    reference: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    gameId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Order