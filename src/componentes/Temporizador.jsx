import { faArrowLeft, faXmark, faCheck, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import "../css/temporizador.css";

function Temporizador(props) {
  const [horas, setHoras] = useState(0);
  const [sonandoTemporizador, setSonandoTemporizador] = useState(false);
  //Horas
  const CambioValue = () => {
    horas >= 23 ? setHoras(0) : setHoras(horas + 1)
  }
  const CambioValueMenos = () => {
    horas <= 0 ? setHoras(23) : setHoras(horas - 1)
  }
  //Minutos
  const [minutos, setMinutos] = useState(0);

  const CambioValueMinutoMas = () => {
    minutos >= 59 ? setMinutos(0) : setMinutos(minutos + 1);
  }
  const CambioValueMinutoMenos = () => {
    minutos <= 0 ? setMinutos(59) : setMinutos(minutos - 1);
  }
  //aggcero funcion que agrega ceros adelante de un solo dijito
  const aggCero = (n) => {
    return n.toString().length < 2 ? "0" + n : n;
  }

  const [segundos, setSegundos] = useState(0);
  const CambioValueSegundosMas = () => {
    segundos >= 59 ? setSegundos(0) : setSegundos(segundos + 1);
  }

  const CambioValueSegundosMenos = () => {
    segundos <= 0 ? setSegundos(59) : setSegundos(segundos - 1);
  }

  useEffect(() => {
    if (props.activar) {
      const interval = setInterval(() => {
        if (horas == 0 && minutos == 0 && segundos == 0) {
          setHoras(0);
          setMinutos(0);
          setSegundos(0);
          setSonandoTemporizador(true);
        } else {
          setSegundos(segundos - 1);
          if (segundos == 0) {
            setSegundos(59);
            setMinutos(minutos - 1);
            if (minutos == 0) {
              setMinutos(59);
              setHoras(horas - 1);
            }
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  })

  return (
    <div className='contTemporizador'>
      <div className='contTemporizador__control1'>
        {
          props.activar ? null : <FontAwesomeIcon icon={faChevronUp} className="contCuentaRegresiva__control1__up"
            onClick={() => CambioValue()} />
        }
        <p className="contTemporizador__control1__count">{aggCero(horas)}</p>
        {
          props.activar ? null : <FontAwesomeIcon icon={faChevronDown} className="contCuentaRegresiva__control1__down"
            onClick={() => CambioValueMenos()} />
        }
      </div>
      <span className='contTemporizador__separado'>:</span>
      <div className='contTemporizador__control1'>
        {
          props.activar ? null : <FontAwesomeIcon icon={faChevronUp} className="contCuentaRegresiva__control1__up"
            onClick={() => CambioValueMinutoMas()} />
        }
        <p className="contTemporizador__control1__count">{aggCero(minutos)}</p>
        {
          props.activar ? null : <FontAwesomeIcon icon={faChevronDown} className="contCuentaRegresiva__control1__down"
            onClick={() => CambioValueMinutoMenos()} />
        }
      </div>
      <span className='contTemporizador__separado'>:</span>
      <div className='contTemporizador__control1'>
        {
          props.activar ? null : <FontAwesomeIcon icon={faChevronUp} className="contCuentaRegresiva__control1__up"
            onClick={() => CambioValueSegundosMas()} />
        }
        <p className="contTemporizador__control1__count">{aggCero(segundos)}</p>
        {
          props.activar ? null : <FontAwesomeIcon icon={faChevronDown} className="contCuentaRegresiva__control1__down"
            onClick={() => CambioValueSegundosMenos()} />
        }
      </div>
      {
        sonandoTemporizador?console.log("Sonando"):console.log("sonando2")
      }
    </div>
  );
}

export default Temporizador;