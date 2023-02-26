import React from 'react'
import { Link } from 'react-router-dom'

function BarraLateral() {
  return (
    
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark w-25" >
    <img
        className="m-1"
        alt="Logo"
        width="24"
        height="20"
      />
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to={'/dashboard'} value="home" className="nav-link active" aria-current="page">
        <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Bienvenido</Link>
      </li>
      <li>
        <Link to={'/dashboard/panel'} className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>Panel</Link>
      </li>
      <li>
        <Link to={'/dashboard/colaboradores'} className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>Colaboradores</Link>
      </li>
      <li>
        <Link to={'/dashboard/proyectos'} className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>Proyectos</Link>
      </li>
      <li>
        <Link to={'/dashboard/clientes'} className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>Clientes</Link>
      </li>
    </ul>
    <hr/>
   
    </div>
  )
}

export default BarraLateral