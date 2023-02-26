import { Router } from "express";
import {delete_lenguajes, get_lenguajes, get_one_lenguajes, post_lenguajes, put_lenguajes} from "../controllers/lenguajes_controller.js"

const lenguajes_routes = Router()
lenguajes_routes.get('/lenguajes', get_lenguajes)
lenguajes_routes.post('/lenguajes', post_lenguajes)
lenguajes_routes.get('/lenguajes/:id', get_one_lenguajes)
lenguajes_routes.put('/lenguajes/:id', put_lenguajes)
lenguajes_routes.delete('/lenguajes/:id', delete_lenguajes)

export default lenguajes_routes