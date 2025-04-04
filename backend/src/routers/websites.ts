import { Router } from "express";
import { create, getAllWebsites, getWebsiteByRegion, remove } from "../controllers/websites/controller";
import paramsValidation from "../middlewares/params-validation";
import validation from "../middlewares/validation";
import { newWebsiteValidation, regionIdValidator, removeWebsiteById } from "../controllers/websites/validator";


const websitesRouter = Router()

websitesRouter.get('/', getAllWebsites)
websitesRouter.get('/region/:regionId', paramsValidation(regionIdValidator), getWebsiteByRegion)
websitesRouter.post('/', validation(newWebsiteValidation), create)
websitesRouter.delete('/:id', paramsValidation(removeWebsiteById), remove)

export default websitesRouter