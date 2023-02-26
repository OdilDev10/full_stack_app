import express from "express";
import routers_test from "./routes/test_routes.js";
import routers_lenguajes from "./routes/lenguajes_routes.js";
import auth_router from "./routes/auth_routes.js";
import { PORT } from "./models/config.js";
import cors from 'cors'

import morgan from "morgan";
import routers_clientes from "./routes/clientes_routes.js";
import routers_proyectos from "./routes/proyectos_routes.js";
import routers_colaboradores from "./routes/colaboradores_router.js";

// CONFIGURACION
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.listen(PORT, () => console.log(`--------127.0.0.1 listening on port ${PORT}!----------`))
const allowedOrigins = ['http://localhost:58611', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



// RUTAS
app.use('/api/auth/',auth_router)
app.use('/api/',routers_test)
app.use('/api/',routers_lenguajes)
app.use('/api/', routers_clientes)
app.use('/api/', routers_proyectos)
app.use('/api/', routers_colaboradores)



// MIDDLEWARE SI NO EXISTE LA RUTA
app.use((req, res, next) => {
    res.status(404).json({
        message:"URL not found"
    })
})

export default app

