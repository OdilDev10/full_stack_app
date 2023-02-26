import { pool } from "../models/conexion.js";

export const get_proyectos = async (req, res) => {
  try {
    const peticion = await pool.query("SELECT * FROM proyectos");
    res.status(200).json(peticion[0]);
  } catch (error) {
    res.status(404).send({ Error: error });
  }
};

export const get_proyectos_cliente = async (req, res) => {
  try {
    const id = req.params.id;
    const peticionCliente = await pool.query(
      "SELECT * FROM clientes WHERE id = ?",
      [id]
    );
    const peticionProyectos = await pool.query(
      "SELECT * FROM proyectos WHERE id = ?",
      [id]
    );
    const peticion = [peticionCliente[0]];

    if (peticionProyectos[0] != "") {
      const peticionEncargado = await pool.query(
        "SELECT * FROM users WHERE id = ?",
        [peticionProyectos[0][0].encargado]
      );
      peticion.push(peticionProyectos[0]);
      peticion.push(peticionEncargado[0]);
    }

    res.status(200).json(peticion);
  } catch (error) {
    res.status(404).send({ Error: error });
  }
};

export const post_proyectos = () => {};

export const put_proyectos_estado = async (req, res) => {
  try {
    const id = req.params.id;
    const { estado } = req.body;
    if(estado == 'pendiente' || estado == 'en proceso' || estado == 'entregado'){
       const peticionCliente = await pool.query(
        "UPDATE proyectos SET estado = ? WHERE id = ?",
        [estado, id]
      );
      return res.status(200).send(`Estado actualizado a ${estado}`);
    }
    return res.status(400).send("No es una opcion posible");


  } catch (error) {
    res.status(404).send({ Error: error });
  }
};
