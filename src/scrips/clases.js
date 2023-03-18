export class Alarma {
    constructor(hora, minuto,clase) {
        this.hora = hora;
        this.minuto = minuto;
        this.clase = clase
    }
  }

  export class AlarmaActiva{
    constructor(hora,minuto,activa){
        this.hora = hora;
        this.minuto = minuto;
        this.activa = activa;
    }
  }