import { parse } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faXmark, faCheck, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {AggAlarma} from '../scrips/localStorage.js'

import "../css/nuevaAlarma.css";

function NuevaAlarma(props) {
  const renderHoraYMinutos = document.querySelector(".contAlarmaNueva__active__controls__check__inp");
  const renderHoraYMinutos2 = document.querySelector(".contAlarmaNueva__active__controls__check__inp2");
  const fecha = new Date;
  const [horas, setHoras] = useState(fecha.getHours())
  //Horas
  const CambioValue = () => {
    horas >= 12 ? setHoras(1) : setHoras(horas + 1)
  }
  const CambioValueMenos = () => {
    horas <= 1 ? setHoras(12) : setHoras(horas - 1)
  }
  //Minutos
  const [minutos, setMinutos] = useState(fecha.getMinutes())

  const CambioValueMinutoMas = () => {
    minutos >= 59 ? setMinutos(0) : setMinutos(minutos + 1)
  }
  const CambioValueMinutoMenos = () => {
    minutos <= 1 ? setMinutos(59) : setMinutos(minutos - 1)
  }

  //Esta funcion agrega un cero antes del numero de la hora o minuto 
  const aggCero = (n) => {
    return n.toString().length < 2 ? "0" + n : n;
  }
  //Esta funcion actualiza la hora como y pasa de hora militar a hora normal 
  const actuHora = (n) => {
    switch (n) {
      case 13: return "1";
      case 14: return "2";
      case 15: return "3";
      case 16: return "4";
      case 17: return "5";
      case 18: return "6";
      case 19: return "7";
      case 20: return "8";
      case 21: return "9";
      case 22: return "10";
      case 23: return "11";
      default: return n;
    }
  }

  const aggAlarmaNueva = () => {
    if (props.mostrarNueva == true) {
      if (renderHoraYMinutos.checked) {
        console.log("check");
      } else if (renderHoraYMinutos2.checked) {
        console.log("check2");
      }
    }
  }
  //Esta funcion resetea el contador de a las horas y minutos de las alarmas;
  const reset = () => {
    if (props.mostrarNueva == true) {
      setHoras(fecha.getHours());
      setMinutos(fecha.getMinutes());
    }
  }
  // useEffect(() => {
  //   if (props.mostrarNueva == true) {
  //     console.log("Funcionando perfectamente");
  //   }
  // })
  return (
    <div className={props.mostrarNueva == true ? 'contAlarmaNueva__active' : 'contAlarmaNueva'}>
      {/* Navegacion */}
      <div className='contAlarmaNueva__active__nav'>
        <FontAwesomeIcon className='contAlarmaNueva__active__nav__icoCerrar' icon={faXmark} onClick={() => {
          props.cerrar();
          reset();
        }} />
        <div className="contAlarmaNueva__active__nav__subTitulo">
          <h3 className="contAlarmaNueva__active__nav__subTitulo__titulo">Agregar Alarma</h3>
          <p className="contAlarmaNueva__active__nav__subTitulo__tituloAbajo">Sonará en -- horaas y -- minutos </p>
        </div>
        <FontAwesomeIcon icon={faCheck} className="contAlarmaNueva__active__nav__agg" onClick={() => {
          props.cerrar();
          AggAlarma();
          props.validarMostrarAlarma();
          }} />
      </div>
      {/* controloes */}
      <div className="contAlarmaNueva__active__controls">
        <div className='contAlarmaNueva__active__controls__check'>
          <input className='contAlarmaNueva__active__controls__check__inp' type="radio" id="am" name='tipoHora' defaultChecked />
          <label className='contAlarmaNueva__active__controls__check__lbl' htmlFor="am">AM</label>
          <br />
          <input className='contAlarmaNueva__active__controls__check__inp2' type="radio" id="pm" name='tipoHora' />
          <label className='contAlarmaNueva__active__controls__check__lbl2' htmlFor="pm">PM</label>
        </div>

        <div className='contAlarmaNueva__active__controls__inp1'>
          <FontAwesomeIcon className='contAlarmaNueva__active__controls__ico' icon={faChevronUp} onClick={() => CambioValue()} />
          <p className='contAlarmaNueva__active__controls__mostrarHora'>{aggCero(actuHora(horas))}</p>
          <FontAwesomeIcon className='contAlarmaNueva__active__controls__ico' icon={faChevronDown} onClick={() => CambioValueMenos()} />
        </div>

        <div className='contAlarmaNueva__active__controls__inp1'>
          <FontAwesomeIcon className='contAlarmaNueva__active__controls__ico' icon={faChevronUp} onClick={() => CambioValueMinutoMas()} />
          <p className='contAlarmaNueva__active__controls__mostrarHora minutos'>{aggCero(minutos)}</p>
          <FontAwesomeIcon className='contAlarmaNueva__active__controls__ico' icon={faChevronDown} onClick={() => CambioValueMinutoMenos()} />
        </div>
      </div>
    </div>
  );
}

export default NuevaAlarma;