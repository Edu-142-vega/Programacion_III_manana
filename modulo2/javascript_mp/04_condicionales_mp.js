let temperatura = 35;

if (temperatura > 30) {
    console.log("La temperatura del equipo es alta, recomendamos revisión inmediata");
}

let clave_acceso = "cumbre2023";
if (clave_acceso === "cumbre2023") {
    console.log("Acceso concedido al sistema de soporte técnico");
} else {
    console.log("Acceso denegado al sistema de soporte técnico");
}

let calificacion_cliente = 7;
if (calificacion_cliente >= 9) {
    console.log("El cliente evaluó: Excelente servicio técnico");
} else if (calificacion_cliente >= 6) {
    console.log("El cliente evaluó: Buen servicio técnico");
} else {
    console.log("El cliente evaluó: Se requiere mejorar el soporte");
}

let edad_cliente = 20;
let tiene_identificacion = true;

if (edad_cliente >= 18) {
    if (tiene_identificacion) {
        console.log("Puede registrar un ticket avanzado en el sistema");
    } else {
        console.log("Necesita identificación para registrar ciertos tipos de tickets");
    }
} else {
    console.log("Acceso limitado para tickets avanzados por menor edad");
}

// Estructura Switch
let dia_semana = "lunes";

switch (dia_semana) {
    case "lunes":
        console.log("Recordatorio: Mantenimiento general de sistemas");
        break;
    case "viernes":
        console.log("Actividad programada: Respaldo de bases de datos");
        break;
    default:
        console.log("Día normal de soporte técnico");
}

let nivel1 = 20;
let nivel2 = 30;
let nivel3 = 60;

switch (nivel3) {
    case (nivel3):
        console.log("Ticket de prioridad crítica");
        break;
    case (nivel1):
        console.log("Ticket de prioridad baja");
        break;
    default:
        console.log("Ticket de prioridad estándar");
}

let tiempo_diagnostico = 30;
let tiempo_reparacion = 40;
let tiempo_pruebas = 50;

let mayor_tiempo = 0;

if (tiempo_diagnostico > tiempo_reparacion) {
    mayor_tiempo = tiempo_diagnostico;
}

if (tiempo_pruebas > mayor_tiempo) {
    mayor_tiempo = tiempo_pruebas;
}

console.log("La fase que más tiempo toma es:", mayor_tiempo, "minutos");
