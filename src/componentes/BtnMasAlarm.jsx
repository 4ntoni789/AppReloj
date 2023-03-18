import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import NuevaAlarma from "./NuevaAlarma"
import "../css/btnMasAlarm.css";
function BtnMasAlarm(props) {
  const [activarNuevaAlarma, setActivarNuevaAlarma] = useState(false);
  const mostrarNuevaTarea = () => {
    activarNuevaAlarma ? setActivarNuevaAlarma(false) : setActivarNuevaAlarma(true);
  }
  window.addEventListener("keydown", e => {
    if (e.key == "Escape") {
      setActivarNuevaAlarma(false);
    }else if(e.key == "+"){
      setActivarNuevaAlarma(true);
    }
  })
  return (
    <div className='contBtnMasAlarm'>
      <div className='contBtnMasAlarm__btnMasAlarm' onClick={() => mostrarNuevaTarea()}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <NuevaAlarma mostrarNueva={activarNuevaAlarma} cerrar={() => mostrarNuevaTarea()} validarMostrarAlarma={()=>props.validarMostrarAlarma2()} />
    </div>
  );
}

export default BtnMasAlarm;