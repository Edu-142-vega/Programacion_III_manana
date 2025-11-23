function saludarts(nombre?: string): string {
    return `Bienvenido ${nombre} al Sistema de Soporte Técnico`;
}
console.log(saludar('Carlos'));
var sumar = (a: number, b: number): number => {
    return a + b;
}
console.log(sumar(5, 5));
function saludarDeNuevots(): void {
    console.log(`Hola`);
    console.log(`Gracias por usar el Sistema de Soporte Técnico`);
}
saludarDeNuevots();
function calcularCostoServicio(precioBase: number): number {
    return precioBase * 1.12; 
}
function calcularCostoServiciots(precioBase: number): void {
    console.log(precioBase * 1.12);
}
console.log(calcularCostoServicio(5));
calcularCostoServiciots(7);