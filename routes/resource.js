import { Router } from "express";
import { getResourcesController } from "../controller/resourcesController.js";

const router = Router()

router.get('/resources',getResourcesController)

export default router