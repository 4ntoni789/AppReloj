import { faArrowLeft, faXmark, faCheck, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import BtnPlay from '../componentes/BtnPlay';
import Temporizador from '../componentes/Temporizador';
import "../css/cuentaRegresivaPag.css";

function CuentaRegresivaPag(props) {
  const [activarCuenta, setActivarCuenta] = useState(false);
  const ActivarDesactivarCuenta = () => {
    activarCuenta ? setActivarCuenta(false) : setActivarCuenta(true);
  }
  
  return (
    <div className='contCuentaRegresiva'>
      <Temporizador activar={activarCuenta}/>
      <BtnPlay val={() => ActivarDesactivarCuenta()} validar={activarCuenta} />
    </div>
  );
}

export default CuentaRegresivaPag;