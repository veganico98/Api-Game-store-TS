import connection from "../config/database";
import Publisher from "./Publisher/Publisher";

connection.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Tabelas sincronizadas")
})

export default {
    Publisher
}