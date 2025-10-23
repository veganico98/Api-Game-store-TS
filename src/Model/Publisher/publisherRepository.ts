import PublisherModelInterface from "./Interface/PublisherModelInterface";
import Publisher from "./Publisher";

const create = async (publisher: Partial<PublisherModelInterface>): Promise<PublisherModelInterface> => {
    try{
        const newPublisher = await Publisher.create(publisher)
        return newPublisher
    } catch (error: any){
        throw new Error(error);
    }
}

const findByName = async (name: string): Promise<PublisherModelInterface | null> => {
    try{
        const publisher = await Publisher.findOne({
            where: {
                name
            }
        })
        return publisher
    } catch (error: any){
        throw new Error(error);
    }
}

export default {
    create,
    findByName
}