import GameModelInterface from "../../Model/game/Interface/GameModelInterface"
import gameRepository from "../../Model/game/gameRepository"
import GameCreateInterface from "../../Model/game/Interface/GameCreateInterface"

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

const hasRegister = async (name: string, publisherId: number): Promise<boolean> => {
    const where = {
        publisherId
    }
    const game = await gameRepository.findByName(name)

    if (game){
        return true;
    }
    return false
}

const create = async (game: GameCreateInterface) => {
    try{
        const createGameService = await gameRepository.create(game)

        return createGameService
    } catch (error: any){
        throw new Error(error)
    }
}

export default {
    validPayload,
    hasRegister,
    create
}