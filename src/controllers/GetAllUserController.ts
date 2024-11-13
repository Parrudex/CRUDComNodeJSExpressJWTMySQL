import { Request, Response } from "express";
import { GetAllUserService } from "../services/GetAllUserService";

exports.GetAllUserController = async (req: Request, res: Response) => {

    const service = new GetAllUserService()

    const result = await service.execute()

    if (result instanceof Error) return res.status(400).json({ error: result.message })

    return res.status(201).json(result)

}