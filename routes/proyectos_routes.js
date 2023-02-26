import { Router } from "express"
import { get_proyectos, get_proyectos_cliente, post_proyectos, put_proyectos_estado } from "../controllers/proyectos_controller.js"

const routers_proyectos = Router()

routers_proyectos.get('/proyectos', get_proyectos)
routers_proyectos.get('/proyectos/:id', get_proyectos_cliente)
routers_proyectos.put('/proyectos/:id', put_proyectos_estado)
routers_proyectos.post('/proyectos', post_proyectos)



export default routers_proyectos