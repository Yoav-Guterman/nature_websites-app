import { NextFunction, Request, Response } from "express";
import { RegionModel } from "../../models/region"

export async function getAllRegions(req: Request, res: Response, next: NextFunction) {
    try {
        const regions = await RegionModel.find()
        res.json(regions.map(doc => doc.toObject()))
    } catch (e) {
        next(e)
    }
}