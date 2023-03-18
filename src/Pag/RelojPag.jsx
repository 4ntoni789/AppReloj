import React from 'react';
import Reloj from '../componentes/Reloj';
import "../css/relojPag.css";

function RelojPag(props) {
  const fecha = new Date;
  // console.log(fecha.getMonth())
  const aggCero = (n) => {
    return n.toString().length < 2 ? "0" + n : n
  }
  const actuMes = (n) => {
    switch (n) {
      case 0: return "1";
      case 1: return "2";
      case 2: return "3";
      case 3: return "4";
      case 4: return "5";
      case 5: return "6";
      case 6: return "7";
      case 7: return "8";
      case 8: return "9";
      case 9: return "10";
      case 10: return "11";
      case 11: return "12";
    }
  }
  const HoraPmAm=(n)=>{
    if(fecha.getHours().toString()>=12 && fecha.getHours().toString()<24){
      return "p.m.";
    }else if(fecha.getHours().toString()>=1 && fecha.getHours().toString()<=11){
      return "a.m.";
    }else if(fecha.getHours() == 24){
      return "a.m.";
    }
  }
  return (
    <div className='relojIni'>
      <Reloj />
      <div className='relojIni__contSubFecha'>
        <h3>Actual: {aggCero(fecha.getDate()) + "/" + aggCero(actuMes(fecha.getMonth()))+ "/" + fecha.getFullYear() + " " + HoraPmAm() }</h3>
      </div>
    </div>
  );
}

export default RelojPag;