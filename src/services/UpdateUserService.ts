import { UserRepository } from "../repositories/UserRepository";

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
    update_at: Date
    user_used_to_updated: number
}

export class UpdateUserService {
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
        update_at,
        user_used_to_updated
    }: UserRequestProps) {
        if (!id) return new Error('Id não encontrado')

        if (!cpf) return new Error('CPF é obrigatório')
        if (!full_name) return new Error('Nome é obrigatório')
        if (!birthday) return new Error('Data de aniversário é obrigatório')
        if (!address_street) return new Error('Rua é obrigatório')
        if (!address_number) return new Error('Número é obrigatório')
        if (!address_neighborhood) return new Error('Bairro é obrigatório')
        if (!address_city) return new Error('Cidade é obrigatório')
        if (!address_state) return new Error('Estado é obrigatório')
        if (!address_cep) return new Error('CEP é obrigatório')

        const user = await UserRepository.findOne({ where: { id } })

        if (!user) return new Error('Usuário não encontrado')

        if (user) {
            user.cpf = cpf ? cpf : user.cpf
            user.full_name = full_name ? full_name : user.full_name
            user.birthday = birthday ? birthday : user.birthday
            user.address_street = address_street ? address_street : user.address_street
            user.address_number = address_number ? address_number : user.address_number
            user.address_complement = address_complement ? address_complement : user.address_complement
            user.address_neighborhood = address_neighborhood ? address_neighborhood : user.address_neighborhood
            user.address_city = address_city ? address_city : user.address_city
            user.address_state = address_state ? address_state : user.address_state
            user.address_cep = address_cep ? address_cep : user.address_cep
            user.status = status ? status : user.status
            user.update_at = update_at ? update_at : user.update_at
            user.user_used_to_updated = user_used_to_updated ? user_used_to_updated : user.user_used_to_updated

            await UserRepository.save(user)
        }

        return user
    }
}