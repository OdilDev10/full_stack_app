import { pool } from "../models/conexion.js";

// CONTROLADOR TEST

export const get_test = async (req, res) => {
  try {
    const result = await pool
      .query("SELECT * FROM games")
      .catch((error) => res.status(404).json({ response: error }));

    res.json({ response: result }).status(204);
  } catch (error) {
    res.json({ error: error }).status(404);
  }
};

export const post_test = async (req, res) => {
  try {
    let body = req.body;
    console.log(body);
    const { nombre, precio, descripcion } = req.body;
    const [rows] = await pool
      .query("INSERT INTO games (nombre, precio, descripcion) VALUES (?,?,?)", [
        nombre,
        precio,
        descripcion,
      ])
      .catch((error) => res.status(404).json({ response: error }));

    res
      .send({
        id: rows.insertId,
        nombre,
        precio,
        descripcion,
      })
      .status(204);
  } catch (error) {
    res.json({ error: error }).status(404);
  }
};

export const put_test = async (req, res) => {
  try {
    const getOne = req.params.id;
    const { nombre, precio, descripcion } = req.body;
    const [result] = await pool
      .query(
        "UPDATE games SET nombre = IFNULL(?, nombre), precio = IFNULL(?, precio), descripcion = IFNULL(?, descripcion) WHERE id = ?",
        [nombre, precio, descripcion, getOne]
      )
      .catch((error) => res.status(404).json({ response: error }));

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Not Found",
      });
    res.json({ message: "Updated" }).status(204);
  } catch (error) {
    res.json({ message: error }).status(404);
  }
};

export const get_one_test = async (req, res) => {
  try {
    const getOne = req.params.id;
    const [rows] = await pool
      .query("SELECT * FROM games WHERE id = ?", [getOne])
      .catch((error) => res.status(404).json({ response: error }));

    if (rows.length <= 0) return res.status(404).json({message: "Not Found",});
    res.json(rows[0]);
  } catch (error) {
    res.json({ message: error }).status(404);
  }
};


export const delete_test = async (req, res) => {
  try {
    const id = req.params.id
    const [rows] = await pool.query("DELETE FROM games WHERE id = ?", [id])
    .catch(error => res.status(404).json({"error": error}))
    if (rows <= 0) return res.status(204).json({"message": "Not Found"})
    res.json({ "data": rows[0]}).status(204);
  } catch (error) {
    res.json({ message: error }).status(404);
  }
};
