import { pool } from "../models/conexion.js";

export const get_clientes = async (req, res) => {
  try {
    const peticion = await pool.query("SELECT * FROM clientes");
    res.status(200).json(peticion[0]);
  } catch (error) {
    res.status(404).send({ Error: error });
  }
};

export const post_clientes = async (req, res) => {
  try {
    const {name, image, telefono, correo} = req.body
    const [rows] = await pool.query("INSERT INTO clientes (name, correo, telefono, image) VALUES (?, ?, ?, ?)", [name,correo, telefono, image]);

    res.send({
        id: rows.insertId,
        name,
        image,
        telefono,
        correo
    })

  } catch (error) {
    return res.status(500).json({
        message: error
    })
  }
};


export const delete_clientes = async (req, res) => {
  try {
    const peticion = await pool.query("DELETE FROM clientes WHERE id = ?", [
      req.params.id,
    ]);
    res.status(200).json("Cliente Eliminado");
  } catch (error) {
    res.status(404).send({ Error: error });
  }
};
