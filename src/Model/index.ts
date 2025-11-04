import connection from "../config/database";
import Game from "./game/Game";
import Publisher from "./Publisher/Publisher";

Publisher.hasMany(Game, {
    foreignKey: {
        name: "publisherId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }
})
connection.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Tabelas sincronizadas")
})

export default {
    Publisher,
    Game
}