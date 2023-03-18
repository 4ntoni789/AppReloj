import { faBars, faBell, faClock, faHourglass, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navegacion.css";

function Navegacion(props) {
  return (
    <div className='contNavegacion'>
      <NavLink className={({ isActive }) => (isActive ? "contNavegacion__ico active" : "contNavegacion__ico")} to="/alarma" title='Alarma'>
        <FontAwesomeIcon icon={faBell} />
        </NavLink>
      <NavLink className='contNavegacion__ico' to="/"><FontAwesomeIcon icon={faClock} title='Reloj'/></NavLink>
      <NavLink className='contNavegacion__ico' to="/cronometro"><FontAwesomeIcon icon={faStopwatch} title='Cronometro' /></NavLink>
      <NavLink className='contNavegacion__ico' to="/temporizador"><FontAwesomeIcon icon={faHourglass} title='Cuenta regresiva' /></NavLink>
    </div>
  );
}

export default Navegacion;