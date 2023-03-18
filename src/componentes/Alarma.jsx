import React, { useEffect, useState } from 'react';
import "../css/alarma.css";
import BtnPrenderAlarma from "./BtnPrenderAlarma";
import { AlarmaActiva } from '../scrips/clases';
import { ActivarAlarmaLocal, DesactivarAlarmaLocal } from '../scrips/localStorage';
import { ActivarAlarmaYmostrar } from '../scrips/ActivarDespertador';

function Alarma(props) {
  const [activarAlarma, setActivarAlarma] = useState(false);
  const ActivarAlarma = () => {
    activarAlarma ? setActivarAlarma(false) : setActivarAlarma(true);
  }

  const AsignarValorLocalAlarma = () => {
    let buscadorAlarmasLocalMap;
    if (localStorage.getItem("activa")) {
      buscadorAlarmasLocalMap = JSON.parse(localStorage.getItem("activa"));
    } else {
      buscadorAlarmasLocalMap = [];
    }
    for (let i = 0; i < buscadorAlarmasLocalMap.length; i++) {
      if (props.hora == buscadorAlarmasLocalMap[i].hora && props.minuto == buscadorAlarmasLocalMap[i].minuto) {
        setActivarAlarma(Boolean(buscadorAlarmasLocalMap[i].activa));
      }
    }
  }
 
  useEffect(() => {
    AsignarValorLocalAlarma()
  }, []);

  useEffect(() => {
    if (activarAlarma) {
      ActivarAlarmaLocal(props.hora, props.minuto, true);
      ActivarAlarmaYmostrar(props.hora, props.minuto, true);
    } else {
      DesactivarAlarmaLocal(props.hora, props.minuto);
    }
  }, [activarAlarma])

  return (
    <div className={activarAlarma ? 'alarmaItem__active' : 'alarmaItem'}>
      <div className='alarmaItem__contInfo'>
        <p className='alarmaItem__contInfo__hora'>{props.hora}:{props.minuto} am</p>
        <p className='alarmaItem__contInfo__veces'>{activarAlarma ? `Sonada en` : "una vez"}</p>
      </div>
      <BtnPrenderAlarma ActivarDesactivar={() => ActivarAlarma()} activarBtnAlarm={activarAlarma} />
    </div>
  );
}

export default Alarma;