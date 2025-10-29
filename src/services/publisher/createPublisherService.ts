import PublisherModelInterface from "../../Model/Publisher/Interface/PublisherModelInterface";
import ValidPayloadPublisherInterface from "../../Model/Publisher/Interface/ValidPayloadPublisherInterface";
import bcrypt from 'bcrypt'
import publisherRepository from "../../Model/Publisher/publisherRepository";

const validPayload = (publisher: ValidPayloadPublisherInterface): boolean => {
    if(!publisher.email || !publisher.password){
        return false
    }
    return true
}

const create = async (publisher: Partial<PublisherModelInterface>): Promise<PublisherModelInterface | null> => {
    try{
        if(!publisher.password){
            return null
        }

        publisher.password = await bcrypt.hash(publisher.password, 10)

        const publisherNew = await publisherRepository.create(publisher)

        return publisherNew
    } catch (error: any){
        throw new Error(error);
    }
}

const publisherExist = async (name: string): Promise<boolean> => {
    const publisher = await publisherRepository.findByName(name)

    if (publisher){
        return true
    }

    return false
}

export default {
    create,
    validPayload,
    publisherExist,
}