import React from 'react';
import { useEffect, useState } from 'react'
import "../css/reloj.css"

function Reloj(props) {
  const [count, setCount] = useState(12)
  const reloj = new Date;
  const aggCero = (n) => {
    return n.toString().length < 2 ? "0" + n : n;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(reloj.getSeconds())
    }, 1000)
    return () => clearInterval(interval);
  }, [count])

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
  return (
    <div className='reloj'>
      <h1 className='reloj__ho'>{actuHora(aggCero(reloj.getHours()))}:</h1>
      <h1 className='reloj__min'>{aggCero(reloj.getMinutes())}:</h1>
      <h1 className='reloj__seg'>{aggCero(count)}</h1>
    </div>
  );
}

export default Reloj;