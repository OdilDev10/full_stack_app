import { Router } from "express";
import { get_colaboradores, post_colaboradores } from "../controllers/colaboradores_controller.js";

const routers_colaboradores = Router()

routers_colaboradores.get('/colaboradores', get_colaboradores)
routers_colaboradores.post('/colaboradores', post_colaboradores)



export default routers_colaboradores

