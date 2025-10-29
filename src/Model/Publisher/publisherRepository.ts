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

const findByEmail = async (email: string): Promise<PublisherModelInterface | null> => {
    try{
        const publisher = await Publisher.findOne({
            where: {
                email
            }
        })
        return publisher
    } catch (error: any){
        throw new Error(error);
    }
}

export default {
    create,
    findByEmail
}