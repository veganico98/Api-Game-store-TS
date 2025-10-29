import publisherRepository from "../../Model/Publisher/publisherRepository"

const destroy = async (id: number): Promise<boolean> => {
    try{
        return await publisherRepository.destroy(id)
    }catch(error: any){
        throw new Error(error);
    }
}

export default {
    destroy
}