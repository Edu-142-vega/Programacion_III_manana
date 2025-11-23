console.log("VARIABLES - SISTEMA DE SOPORTE TÉCNICO");

// String
saludo = "Bienvenido al sistema de soporte técnico";
console.log("Mensaje del sistema:", saludo);
console.log("Categoría del dato:", typeof(saludo));

// Number
numero = 3;
console.log("Cantidad de tickets abiertos:", numero);
console.log("Categoría del dato:", typeof(numero));

// Boolean
booleana = true;
console.log("Sistema en línea:", booleana);
console.log("Categoría del dato:", typeof(booleana));

// Undefined
indefinida = undefined;
console.log("Ticket asignado aún sin técnico:", indefinida);
console.log("Categoría del dato:", typeof(indefinida));

// Null
nula = null;
console.log("Técnico actual para el ticket:", nula);
console.log("Categoría del dato:", typeof(nula));

// BigInt
bigentero = 202510190001n;
console.log("Número de registro del sistema:", bigentero);
console.log("Categoría del dato:", typeof(bigentero));

// Objeto
ticket = {
    cliente: "Carlos Ramírez",
    problema: "La laptop no enciende",
    prioridad: "Alta"
};
console.log("Variable Objeto:", ticket);
console.log("Tipo de variable:", typeof(ticket));

// Array
prioridades = ["Alta", "Media", "Baja"];
console.log("Variable Array:", prioridades);
console.log("Tipo de variable:", typeof(prioridades));
