import { useState } from "react";
import { Alarma, AlarmaActiva } from "./clases";

let alarmaLocal;
if (localStorage.getItem("alarma")) {
  alarmaLocal = JSON.parse(localStorage.getItem("alarma"));
} else {
  alarmaLocal = [];
}

export const AggAlarma = () => {
  const inp1 = document.querySelector(".contAlarmaNueva__active__controls__mostrarHora");
  const inp2 = document.querySelector(".minutos");
  alarmaLocal.push(new Alarma(inp1.textContent, inp2.textContent));
  localStorage.setItem("alarma", JSON.stringify(alarmaLocal));
}

let alarmaLocalActiva;
if (localStorage.getItem("activa")) {
  alarmaLocalActiva = JSON.parse(localStorage.getItem("activa"));
} else {
  alarmaLocalActiva = [];
}

export const ActivarAlarmaLocal = (h, m, a) => {
  alarmaLocalActiva.push(new AlarmaActiva(h, m, a));
  localStorage.setItem("activa", JSON.stringify(alarmaLocalActiva));
  let eliminadorDeDuplicados = alarmaLocalActiva.reduce((a, e) => {
    if (!a.find(d => d == e)) {
      a.push(e)
    }
    return a;
  }, [])
  localStorage.setItem("activa", JSON.stringify(eliminadorDeDuplicados));
}
export const DesactivarAlarmaLocal = (h, m) => {
  for (let i = 0; i < alarmaLocalActiva.length; i++) {
    if (h == alarmaLocalActiva[i].hora && m == alarmaLocalActiva[i].minuto) {
      alarmaLocalActiva.splice(i, 1);
      localStorage.setItem("activa", JSON.stringify(alarmaLocalActiva));
    }
    if(alarmaLocalActiva.length <1){
      localStorage.removeItem("activa");
    }
  }
}