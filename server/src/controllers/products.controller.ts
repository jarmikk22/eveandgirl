import {Request, Response} from "express";
import {StatusCodes} from 'http-status-codes';

export class ProductController {
    async getProduct(req: Request, res: Response): Promise<void> {
        res.status(StatusCodes.OK).json({ books : []})
    }
}