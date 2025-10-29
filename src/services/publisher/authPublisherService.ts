import ValidPayloadAuthInterface from "../../Model/Publisher/Interface/ValidPayLoadAuthInterface"
import PublisherModelInterface from "../../Model/Publisher/Interface/PublisherModelInterface"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import publisherRepository from "../../Model/Publisher/publisherRepository";

const validPayload = (payload: ValidPayloadAuthInterface): boolean => {
    if (!payload.email || !payload.password){
        return false
    }

    return true
}

const auth = async (email: string, password: string): Promise<PublisherModelInterface | null> => {
    const publisher = await publisherRepository.findByEmail(email)

    if(!publisher) {
        return null
    }

    const match = await bcrypt.compare(password, publisher.password)

    if(!match){
        return null
    }

    return publisher
}

const createToken = (publisher: PublisherModelInterface): boolean | object => {
    const JWT_SECRET: string | undefined = process.env.JWT_SECRET

    if(!JWT_SECRET){
        return false
    }

    const payload = {
        email: publisher.email
    }

    const expiresIn = '1h'

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn})

    return {
        token,
        expiresIn
    }
}

export default {
    validPayload,
    auth,
    createToken
}