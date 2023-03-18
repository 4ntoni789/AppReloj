import React, { useEffect, useState } from 'react';
import Alarma from '../componentes/Alarma';
import BtnMasAlarm from '../componentes/BtnMasAlarm';
import "../css/alarmaPAg.css";
function AlarmaPag(props) {
  const [validarYMostrarAlarma,setValidarYMostrarAlarma] = useState(false)
  let contenedorAlarmas;
  if (localStorage.getItem("alarma")) {
    contenedorAlarmas = JSON.parse(localStorage.getItem("alarma"));
  } else {
    contenedorAlarmas = [];
  }
  useEffect(()=>{
    setValidarYMostrarAlarma(false);
  })

  return (
    <div className='contAlarmasMap'>
      {
        contenedorAlarmas.map((a, i) => {
          if(validarYMostrarAlarma == true){
            return <Alarma key={i} hora={a.hora} minuto={a.minuto}/>
          }else{
            return <Alarma key={i} hora={a.hora} minuto={a.minuto} />
          }
        })
      }
      <BtnMasAlarm validarMostrarAlarma2={()=>setValidarYMostrarAlarma(true)} />
    </div>
  );
}

export default AlarmaPag;