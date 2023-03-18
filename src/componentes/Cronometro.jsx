import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import "../css/cronometro.css";

function Cronometro(props) {
  const [minuto, setMinutos] = useState(0);
  const [segundos, setSegudos] = useState(0);
  const [microSegundos, setMicroSegudos] = useState(0);
  const aggCero = (n) => {
    return n.toString().length < 2 ? "0" + n : n
  };
  useEffect(() => {
    if (props.activar == true) {
      const inteval = setInterval(() => {
        setMicroSegudos(microSegundos + 1);
        if (microSegundos == 60) {
          setMicroSegudos(0);
          setSegudos(segundos + 1);
          if (segundos == 60) {
            setSegudos(0);
            setMinutos(minuto + 1);
          }
        }
      }, 20);
      return () => clearInterval(inteval);
    }
  });
  const resetCronometro = () => {
    setMicroSegudos(0);
    setSegudos(0);
    setMinutos(0);
  }
  return (
    <div className='contCronometro'>
      <p className='contCronometro__cronometro'>{aggCero(minuto)}:{aggCero(segundos)}.{aggCero(microSegundos)}</p>
      <div className='contCronometro__reset' onClick={() => resetCronometro()}>
        <FontAwesomeIcon icon={faArrowRotateLeft} />
      </div>
    </div>
  );
}

export default Cronometro;