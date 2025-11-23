console.log("OBJETOS DEL SISTEMA DE SOPORTE TÉCNICO");

let ticket = {
    numero: "Ticket 101",
    prioridad: "Alta",
    categoria: "Hardware"
};

console.log(ticket);
console.log(ticket.numero);
console.log(ticket.categoria);
console.log(ticket["prioridad"]);

console.log("Modificación de una clave del objeto");
ticket.numero = "Ticket 150";
console.log(ticket);

console.log("Incluir clave al objeto");
ticket.asignado = "Técnico Juan Pérez";
console.log(ticket);

console.log("Eliminar clave del objeto");
delete ticket.asignado;
console.log(ticket);

console.log("Recorrer un objeto");
for(let clave in ticket){
    console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(ticket));

console.log("Mostrar valores con Object.values");
console.log(Object.values(ticket));

console.log("Objetos Anidados");

let sistema = {
    nombre: "Gestor de Tickets",
    administrador: "Carlos Ramírez",
    detalles:{
        tipo: "Soporte Técnico",
        horario: "08:00 - 18:00",
        ubicacion: "Quito - Oficina Central"
    },
    tickets:[
        {
            numero: "Ticket 201",
            prioridad: "Media"
        },
        {
            numero: "Ticket 305",
            prioridad: "Alta"
        }
    ]
};

console.log("Sistema: ", sistema);
