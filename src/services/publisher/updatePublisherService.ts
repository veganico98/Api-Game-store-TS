import PublisherModelInterface from "../../Model/Publisher/Interface/PublisherModelInterface";
import publisherRepository from "../../Model/Publisher/publisherRepository";

const updatePublisher = async (publisher: Partial<PublisherModelInterface>, id: number) => {
    try{
        return await publisherRepository.update(publisher, id)
    } catch (error: any){
        throw new Error(error);
    }
}

export default {
    updatePublisher
}