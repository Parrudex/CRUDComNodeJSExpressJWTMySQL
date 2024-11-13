import { UserRepository } from "../repositories/UserRepository";
import { User} from "../entities/User";

type UserRequestProps = {
    id: string | Uint8Array
    cpf: number
    full_name: string
    birthday: Date
    address_street: string
    address_number: string
    address_complement: string
    address_neighborhood: string
    address_city: string
    address_state: string
    address_cep: number
    status: string
    created_at: Date
    user_used_to_created: number
    update_at: Date
    user_used_to_updated: number
    removed_at: Date
    user_used_to_removed: number
}

export class CreateUserService {
    async execute({
        id,
        cpf,
        full_name,
        birthday,
        address_street,
        address_number,
        address_complement,
        address_neighborhood,
        address_city,
        address_state,
        address_cep,
        status,
        created_at,
        user_used_to_created,
        update_at,
        user_used_to_updated,
        removed_at,
        user_used_to_removed
    }: UserRequestProps): Promise<Error | User> {
        if (!cpf) return new Error('CPF é obrigatório')
        if (!full_name) return new Error('Nome é obrigatório')
        if (!birthday) return new Error('Data de aniversário é obrigatório')
        if (!address_street) return new Error('Rua é obrigatório')
        if (!address_number) return new Error('Número é obrigatório')
        if (!address_neighborhood) return new Error('Bairro é obrigatório')
        if (!address_city) return new Error('Cidade é obrigatório')
        if (!address_state) return new Error('Estado é obrigatório')
        if (!address_cep) return new Error('CEP é obrigatório')

        const user = UserRepository.create({
            id,
            cpf,
            full_name,
            birthday,
            address_street,
            address_number,
            address_complement,
            address_neighborhood,
            address_city,
            address_state,
            address_cep,
            status,
            created_at,
            user_used_to_created,
            update_at,
            user_used_to_updated,
            removed_at,
            user_used_to_removed
        })

        await UserRepository.save(user)
        return user
    }
}