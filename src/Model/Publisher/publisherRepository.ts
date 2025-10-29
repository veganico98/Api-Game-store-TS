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

const destroy = async (id: number) => {
    try{
        const publisher = await Publisher.destroy({
            where: {
                id
            }
        })

        if (!publisher){
            return false
        }
        return true;
    } catch(error: any) {
        throw new Error(error)
    }
}

const update = async(publisher: Partial<PublisherModelInterface>, id: number) => {
    try{
        const updatePublisher = await Publisher.update(publisher, {
            where: {
                id
            }
        })

        if (updatePublisher[0] == 0){
            return false
        }
        return true;
    }catch(error: any){
        throw new Error(error);
    }
}

const findAll = async (): Promise<PublisherModelInterface[]> => {
    try{
        const publishers = await Publisher.findAll();
        return publishers;
    }catch (error: any){
        throw new Error(error);
    }
}

export default {
    create,
    findByEmail,
    update,
    findAll,
    destroy
}