import { DataTypes } from "@sequelize/core"
import connection from "../../config/database";
import GameModelInterface from "./Interface/GameModelInterface";

const Game = connection.define<GameModelInterface>('game', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    publisherId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Game