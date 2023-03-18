import { faArrowRotateLeft, faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Cronometro from '../componentes/Cronometro';
import "../css/cronometroPag.css"
function CronometroPag(props) {
  const [activarBtn, setActivarBtn] = useState(false);

  const activarBtnDesativar = () => {
    activarBtn == true ? setActivarBtn(false) : setActivarBtn(true);
  }
  return (
    <div className='contCronometroPag'>
      <Cronometro activar={activarBtn} />
      <div className='contCronometroPag__btnActivarCronometro' onClick={() => setActivarBtn(true)}>
        <FontAwesomeIcon icon={faPlay} />
      </div>
      {
        activarBtn
          ?
          <div className='contCronometroPag__btnStop' onClick={() => setActivarBtn(false)}>
            <FontAwesomeIcon icon={faPause} />
          </div>
          :
          null
      }      
    </div>
  );
}

export default CronometroPag;