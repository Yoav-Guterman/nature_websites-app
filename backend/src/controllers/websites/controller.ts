import { NextFunction, Request, Response } from "express";
import { WebsiteModel } from "../../models/website";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";
// import AppError from "../../errors/app-error";
// import { StatusCodes } from "http-status-codes";
// import { GameModel } from "../../models/game";
// import { Category } from "../../enum/category.enum";

export async function getAllWebsites(req: Request, res: Response, next: NextFunction) {
    try {
        const websites = await WebsiteModel.find().populate(['region'])
        res.json(websites.map(doc => doc.toObject()))
    } catch (e) {
        next(e)
    }
}

export async function getWebsiteByRegion(req: Request<{ regionId: string }>, res: Response, next: NextFunction) {
    try {
        const regionId = req.params.regionId
        const websitesByRegion = await WebsiteModel.find({ regionId }).populate(['region'])
        res.json(websitesByRegion.map(doc => doc.toObject()))
    } catch (e) {
        next(e)
    }
}

export async function create(req: Request<{}, {}, { regionId: string, }>, res: Response, next: NextFunction) {
    try {
        const regionId = req.body.regionId

        let createParams = { ...req.body, region: regionId }

        const website = new WebsiteModel(createParams)
        await website.save()
        res.json(website.toObject())

    } catch (e) {
        next(e)
    }
}

export async function remove(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const _id = req.params.id
        const deleteResponse = await WebsiteModel.deleteOne({ _id })

        if (deleteResponse.deletedCount === 0) return next(new AppError(StatusCodes.NOT_FOUND, 'the book you were trying to delete does not exist'))

        res.json({
            success: true
        })

    } catch (e) {
        next(e)
    }
}