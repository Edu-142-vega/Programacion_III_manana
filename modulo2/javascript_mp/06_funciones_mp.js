console.log("FUNCIONES DEL SISTEMA DE SOPORTE TÉCNICO");

console.log("FORMA CLÁSICA");
function saludar(){
    console.log("Bienvenido al Sistema de Soporte Técnico");
}
saludar();

console.log("FORMA CON PARÁMETROS Y RETORNO");
function calcularTotal(tiempo, tickets){
    return tiempo * tickets
}
let total = calcularTotal(8.5,3);
console.log("El tiempo total estimado es", total);

console.log("FUNCIÓN FLECHA");
const descuento = (total, porcentaje)=>{
    return total - (total * porcentaje / 100)
}
let totalDescuento = descuento(50,10);
console.log("El total con descuento es", totalDescuento);

console.log("FUNCIÓN RETORNO DIRECTO");
const cargoExtra = total => total * 0.1;
console.log("Cargo adicional por urgencia sobre 50 es:", cargoExtra(50));

console.log("FUNCIÓN CON PARÁMETROS POR DEFECTO");
function saludarCliente(nombre, saludo="Ticket creado para"){
    return saludo + " " + nombre;
}
let saludo1 = saludarCliente("Francisco");
let saludo2 = saludarCliente("Francisco","Saludos, ticket registrado para");
console.log(saludo1);
console.log(saludo2);

function verificarTicket(numero) {
    if (numero%2===0) {
        return "El ticket " + numero + " está en proceso";
    } else {
        return "El ticket " + numero + " está pendiente";
    }
}
console.log(verificarTicket(7));  
console.log(verificarTicket(10)); 
console.log(verificarTicket(2));
