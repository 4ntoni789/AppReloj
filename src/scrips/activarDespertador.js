export const ActivarAlarmaYmostrar = (h, m, a) => {
    const interval = setInterval(() => {
        const hora = new Date;
        if (a == true) {
            if (h == hora.getHours() && m == hora.getMinutes()) {
                alert("Alarma activada");
            }
        }
    }, 1000)
    return () => clearInterval(interval);
}