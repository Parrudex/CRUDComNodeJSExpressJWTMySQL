import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

exports.DeleteUserController = async (req: Request, res: Response) => {

    const { id } = req.params

    const {
        status,
        removed_at,
        user_used_to_removed
    } = req.body

    const service = new DeleteUserService()

    const result = await service.execute({
        id,
        status,
        removed_at,
        user_used_to_removed
    })

    if (result instanceof Error) return res.status(400).json({ error: result.message })

    return res.status(201).json(result)

}