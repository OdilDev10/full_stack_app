import React from 'react'

function AuthBoton() {
  return (
    <div>

    
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>hacer</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
        <li><a className="dropdown-item" href="/dashboard/newproyect">Nuevo proyecto...</a></li>
        <li><a className="dropdown-item" href="/dashboard/settings">Ajustes</a></li>
        <li><a className="dropdown-item" href="/dashboard/perfil">Perfil</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="/">desconectar</a></li>
      </ul>
    </div>


    </div>
  )
}

export default AuthBoton