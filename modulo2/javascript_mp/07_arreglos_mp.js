console.log("ARRAYS DEL SISTEMA DE SOPORTE TÉCNICO");

let tickets = ["Ticket 101", "Ticket 102", "Ticket 103", "Ticket 104"];
let listaVacia = new Array();
let listaVacia2 = [];

console.log("Lista original de tickets", tickets);
console.log(listaVacia);
console.log(listaVacia2);

console.log("Acceso a los elementos de la lista");
console.log(tickets[0]);
console.log(tickets[3]);

console.log("Modificar elementos de la lista");
tickets[0] = "Ticket 200";
console.log(tickets);

console.log("Agregar ticket a la lista");
tickets.push("Ticket 300");
console.log(tickets);

console.log("Agregar ticket al inicio");
tickets.unshift("Ticket 001");
console.log(tickets);

console.log("Eliminar el último ticket");
tickets.pop();

console.log("Eliminar el primer ticket");
tickets.shift();
console.log(tickets);

console.log("Iteración de tickets");
let indice = 0;

console.log("Iteración con While");
while(indice < tickets.length){
    console.log("Ticket", indice, "es", tickets[indice]);
    indice++;
}

console.log("Iteración con For");
for (let i = 0; i < tickets.length; i++){
    console.log(tickets[i]);
}

console.log("Iteración con For ... of");
for (let ticket of tickets){
    console.log(ticket);
}

console.log("Iteración con ForEach");
tickets.forEach(function(ticket, indice){
    console.log(indice, ticket);
});
