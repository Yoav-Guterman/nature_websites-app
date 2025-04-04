import { Router } from "express";
import { getAllRegions } from "../controllers/regions/controller";


const regionsRouter = Router()

regionsRouter.get('/', getAllRegions)

export default regionsRouter