import { Router } from "express"
import { delete_clientes, get_clientes, post_clientes } from "../controllers/clientes_controller.js";

const routers_clientes = Router()

routers_clientes.get('/clientes',get_clientes)
routers_clientes.post('/clientes',post_clientes)

routers_clientes.delete('/clientes/:id',delete_clientes)



export default routers_clientes