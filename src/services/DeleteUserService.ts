import { UserRepository } from "../repositories/UserRepository";

type UserRequestProps = {
    id: string | Uint8Array
    status: string
    removed_at: Date
    user_used_to_removed: number
}

export class DeleteUserService {
    async execute({
        id,
        status,
        removed_at,
        user_used_to_removed
    }: UserRequestProps) {
        if (!id) return new Error('Id não encontrado')

        const user = await UserRepository.findOne({ where: { id } })

        if (!user) return new Error('Usuário não encontrado')

        if (user) {
            user.status = status ? status : user.status
            user.removed_at = removed_at ? removed_at : user.removed_at
            user.user_used_to_removed = user_used_to_removed ? user_used_to_removed : user.user_used_to_removed

            await UserRepository.save(user)
        }

        return user
    }
}