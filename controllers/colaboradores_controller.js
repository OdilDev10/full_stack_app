import { pool } from "../models/conexion.js";


export const get_colaboradores = async (req, res) =>{
    try {
        const peticion = await pool.query('SELECT * FROM users')
        res.status(200).json(peticion[0])
    } catch (error) {
        res.status(404).json(error)
    }
}


export const post_colaboradores = async (req, res) =>{
    try {
        const peticion = await pool.query('SELECT * FROM users')
        res.status(200).json(peticion[0])
    } catch (error) {
        res.status(404).json(error)
    }
}
