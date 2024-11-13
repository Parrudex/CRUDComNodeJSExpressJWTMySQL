import { UserRepository } from "../repositories/UserRepository";

export class GetAllUserService {
    async execute() {

        const user = await UserRepository.find()

        if (!user) return new Error('Usuários não encontrados')

        if (user.length === 0) return new Error('Usuários não encontrados')

        return user
    }
}