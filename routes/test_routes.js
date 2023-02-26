import { Router } from "express";
import { get_test, post_test, get_one_test, delete_test, put_test } from "../controllers/test_controller.js"

const routers_test = Router()

routers_test.get('/test', get_test)
routers_test.post('/test', post_test)
routers_test.get('/test/:id', get_one_test)
routers_test.put('/test/:id', put_test)

routers_test.delete('/test/:id', delete_test)

export default routers_test

