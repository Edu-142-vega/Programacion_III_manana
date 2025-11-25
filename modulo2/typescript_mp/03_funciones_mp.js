function saludar(nombre) {
    return "Bienvenido " + nombre + " al Sistema de Soporte Técnico";
}
console.log(saludar('Carlos'));

var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(5, 5));

function saludarDeNuevo() {
    console.log("Hola");
    console.log("Gracias por usar el Sistema de Soporte Técnico");
}
saludarDeNuevo();

function calcularCostoServicio(precioBase) {
    return precioBase * 1.12;
}
function calcularCostoServicioVoid(precioBase) {
    console.log(precioBase * 1.12);
}

console.log(calcularCostoServicio(5)); // retorna valor
calcularCostoServicioVoid(7); // imprime sin retorno
