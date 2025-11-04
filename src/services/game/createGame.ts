import GameModelInterface from "../../Model/game/Interface/GameModelInterface"

const body = {
    name: "Mario",   
}

const validPayload = (body: Partial<GameModelInterface>): boolean => {
    const fields: (keyof GameModelInterface)[] = ['name', 'price', 'publisherId']

    for (const field of fields){
        if(body[field] == undefined || body[field] == '') {
            return false
        }
    }
    return true
}

export default {
    validPayload
}