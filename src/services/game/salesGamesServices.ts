import gameRepository from "../../Model/game/gameRepository"
import GameModelInterface from "../../Model/game/Interface/GameModelInterface"

const getAllById = async (id: number): Promise<GameModelInterface[] | undefined> => {
    try{
        const games = await gameRepository.findAll({
            publisherId: id
        })
        
        return games
    }catch(error: any){
        throw new Error(error)
    }
}

export default {
    getAllById
}