console.log("OPERADORES ARITMÉTICOS - SISTEMA DE SOPORTE TÉCNICO");

numero1 = 20;
numero2 = 5;

console.log("Suma de tiempos estimados (minutos):");
suma = numero1 + numero2;
console.log("Tiempo total estimado:", suma);

console.log("Resta de tiempos entre diagnósticos:");
resta = numero1 - numero2;
console.log("Diferencia de tiempo:", resta);

console.log("Multiplicación (tiempo por cantidad de tickets):");
multiplicacion = numero1 * numero2;
console.log("Tiempo total invertido:", multiplicacion);

console.log("División (tiempo por técnico asignado):");
division = numero1 / numero2;
console.log("Tiempo por técnico:", division);

console.log("Módulo (resto de tiempo sin asignar):");
modulo = numero1 % numero2;
console.log("Resto de minutos:", modulo);

console.log("Potencia (crecimiento de carga de tickets):");
potencia = numero1 ** numero2;
console.log("Proyección de carga:", potencia);

console.log("OPERADORES DE COMPARACIÓN - SISTEMA DE SOPORTE TÉCNICO");
console.log("La prioridad '5' es igual (débilmente) a 5?:", "5" == 5);
console.log("La prioridad '5' es igual (estrictamente) a 5?:", "5" === 5);
console.log("La prioridad '5' es diferente (débilmente) a 5?:", "5" != 5);
console.log("La prioridad '5' es diferente (estrictamente) a 5?:", "5" !== 5);
console.log("La prioridad '5' es mayor que 5?:", "5" > 5);
console.log("La prioridad '5' es menor que 5?:", "5" < 5);
console.log("La prioridad '5' es mayor o igual a 5?:", "5" >= 5);
console.log("La prioridad '5' es menor o igual a 5?:", "5" <= 5);

console.log("OPERADORES LÓGICOS - SISTEMA DE SOPORTE TÉCNICO");
console.log("Y lógico && - ¿El ticket es urgente y está asignado?:", "5" <= 5 && "5" >= 5);
console.log("O lógico || - ¿Hay técnico disponible o ticket en revisión?:", "5" <= 5 || "6" >= 4);
console.log("Negación ! - ¿No hay tickets pendientes?:", !(5 == 5));
