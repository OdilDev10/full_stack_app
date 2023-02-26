import { Router } from "express";
import { login, register } from "../controllers/auth/auth_controller.js";

const auth_router = Router()
auth_router.post('/register', register)
auth_router.post('/login', login)

export default auth_router
