import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

exports.UpdateUserController = async (req: Request, res: Response) => {

    const { id } = req.params

    const {
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
    } = req.body

    const service = new UpdateUserService()

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
        update_at,
        user_used_to_updated
    })

    if (result instanceof Error) return res.status(400).json({ error: result.message })

    return res.status(201).json(result)

}