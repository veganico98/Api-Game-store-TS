import Game from "./Game";
import GameModelInterface from "./Interface/GameModelInterface";

const create = async (game: Partial<GameModelInterface>): Promise<GameModelInterface> => {
    try{
        const newGame = await Game.create(game)
        return newGame
    }catch(error: any){
        throw new Error(error);
    }
}

const findByName = async (name: string, where: object = {}): Promise<GameModelInterface | null> => {
    try{
        const game = await Game.findOne({
            where: {
                name,
                ...where
            }
        })
        return game
    } catch (error: any){
        throw new Error(error);
    }
}

const destroy = async (id: number) => {
    try{
        const game = await Game.destroy({
            where: {
                id
            }
        })
        if (!game){
            return false
        }

        return true;
    } catch (error: any){
        throw new Error(error)
    }
}

const update = async (publisher: Partial<GameModelInterface>, id: number) => {
    try{
        const updateGame = await Game.update(publisher, {
            where: {
                id
            }
        })

        if (updateGame[0] == 0){
            return false
        }

        return true
    } catch (error: any) {
        throw new Error(error);
    }
}

const findAll = async (where: object = {}): Promise<GameModelInterface[]> => {
    try{
        const games = await Game.findAll({
            where:{
                ...where
            }
        });
        return games;
    } catch (error: any){
        throw new Error(error)
    }
}

export default {
    create,
    findByName,
    destroy,
    update,
    findAll
}