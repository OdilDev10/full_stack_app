import React, { useEffect, useState } from "react";
import BarraLateral from "../../components/BarraLateral";

function DashboardProyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [message, setMessage] = useState('');

  const peticion = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/api/proyectos");
      const data = await response.json();
      console.log(data);

      setProyectos(data)
      setMessage(data.Message || "")
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    peticion();
  }, []);
  
  const actualizarEstado = async (e, id) => {
    const body = { estado: e.target.value };
    const url = "http://localhost:3000/api/proyectos/" + id;
  
    await fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((error) => error);
  
      // useEffect(() => {
      //   handleRefresh()
      // }, []);
      
  };

  const handleRefresh = () => {
    window.location.reload();
  }
  return (
    <div className="d-flex vh-100">
      <BarraLateral></BarraLateral>
      <div className="container">
        <h1 className="text-center pb-2 border-bottom">Proyectos</h1>

        
        
        {proyectos.map((proyecto) => (
         
         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-3 mt-1">
        
            <div className="card shadow-sm" key={proyecto.id}>
              <img src='' alt="" />
              <div className="card-body">
                <p className="card-text">
                  <b>{ proyecto.id } {proyecto.name}</b>

                  { proyecto.description }<br />
                  <i>ID Cliente: { proyecto.cliente }</i
                  ><br />
                  <i>ID Encargado: { proyecto.encargado }</i
                  ><br />
                  <i>Estado: { proyecto.estado }</i
                  ><br />

                  <i>Creado: { proyecto.created_at }</i
                  ><br />
                  <i>Actualizado: { proyecto.updated_at }</i
                  ><br />
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      value='pendiente'
                      onClick={actualizarEstado(proyecto.id)}
                    >
                      Pendiente
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      value='en proceso'
                      onClick={actualizarEstado(proyecto.id)}
                     
                    >
                      Proceso
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      value='entregado'
                      onClick={actualizarEstado(proyecto.id)}
                     
                    >
                      Entregado
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

            ))}


        </div>
    
    </div>
  );
}

export default DashboardProyectos;
