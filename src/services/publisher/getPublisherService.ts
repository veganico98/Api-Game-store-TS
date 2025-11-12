import PublisherModelInterface from "../../Model/Publisher/Interface/PublisherModelInterface"
import publisherRepository from "../../Model/Publisher/publisherRepository"

const getPublishers = async (): Promise<PublisherModelInterface[]> => {
    try {
        const publishers = await publisherRepository.findAll()

        return publishers
    } catch (error: any) {
        throw new Error(error)
    }
}

export  default {
    getPublishers
}