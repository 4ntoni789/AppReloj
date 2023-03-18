import React, { useState } from 'react';
import "../css/btnPrenderAlarma.css";

function BtnPrenderAlarma(props) {
  const [activarBtnAlarm,setActivarBtnAlarm] = useState(false);
  // const ActivarDesactivar=()=>{
  //   activarBtnAlarm?setActivarBtnAlarm(false):setActivarBtnAlarm(true);
  // }
  return (
    <div className='alarmaItem__contBtnCeck' onClick={()=>props.ActivarDesactivar()}>
      <label  className='alarmaItem__contBtnCeck__lblSwitch'>
        <div className={props.activarBtnAlarm?'alarmaItem__contBtnCeck__lblSwitch__circle__active':'alarmaItem__contBtnCeck__lblSwitch__circle'}></div>
      </label>
    </div>
  );
}

export default BtnPrenderAlarma;