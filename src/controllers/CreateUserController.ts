import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

exports.CreateUserController = async (req: Request, res: Response) => {

    const {
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
    } = req.body

    const service = new CreateUserService()

    const result = await service.execute({
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

    if (result instanceof Error) return res.status(400).json({ error: result.message })

    return res.status(201).json(result)

}