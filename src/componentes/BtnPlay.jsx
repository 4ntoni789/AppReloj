import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../css/btnPlay.css";

function BtnPlay(props) {
  return (
    <div className='contCronometroPag__btnStop' onClick={() => props.val()}>
      {
        props.validar
          ?
          <FontAwesomeIcon icon={faPause} />
          :
          <FontAwesomeIcon icon={faPlay} />
      }
    </div>
  );
}

export default BtnPlay;