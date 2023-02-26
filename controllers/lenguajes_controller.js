import { pool } from "../models/conexion.js";

export const get_lenguajes = async (req, res) => {
  try {
    const consulta = await pool
      .query("SELECT * FROM lenguajes")
      .catch((error) => res.status(404).json({ error: error }));
    return res.status(202).json({ response: consulta });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

export const post_lenguajes = async (req, res) => {

  try {
    const {name, descripcion, level} = req.body;
    console.log(name, descripcion, level)

    const [rows] = await pool.query(
        "INSERT INTO lenguajes (name, descripcion, level) VALUES (?,?,?)",
        [name, descripcion, level]
      )
    return res.status(200).send({
      id: rows.insertId,
      name,
      descripcion,
      level,
    });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

export const get_one_lenguajes = async (req, res) => {
  try {
    const [rows] = await pool
      .query("SELECT * FROM lenguajes WHERE id = ?", [req.params.id])
      .catch((error) => res.status(404).json({ error: error }));
    if (rows <= 0) return res.status(204).json({ response: "Not Found" });
    return res.status(200).json({ response: rows[0] });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

export const put_lenguajes = async (req, res) => {
  try {
    const id = req.params.id
    const {name, descripcion, level} = req.body
    const consulta = await pool.query("UPDATE lenguajes SET name = IFNULL(?, name), descripcion = IFNULL(?, descripcion), level = IFNULL(?, level) WHERE id = ?", [name, descripcion, level, id])

    res.status(200).json({"Message": "Actualizado"})
  } catch (error) {
    res.status(404).send(error)
  }
}

export const delete_lenguajes = async (req, res) => {
  try {
    const id = req.params.id
    const consulta = await pool.query("DELETE FROM lenguajes WHERE id = ?", [id])
    res.status(204).json({"Message": "Eliminado"})
  } catch (error) {
    res.status(404).send(error)
  }
}