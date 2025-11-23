import { Empleado } from "./05_interface_mp";

const primer_empleado : Empleado = {
    id: 12,
    nombre: 'Juan Pérez',
}
const segundo_empleado: Empleado = {
    id: 13,
    nombre: 'María Gómez',
    correo: 'mariagomez@soportetech.com'
}
console.log(primer_empleado);
console.log(primer_empleado.id);
console.log(primer_empleado.nombre);
console.log(primer_empleado.correo);
console.log(segundo_empleado);
console.log(segundo_empleado.id);
console.log(segundo_empleado.nombre);
console.log(segundo_empleado.correo);