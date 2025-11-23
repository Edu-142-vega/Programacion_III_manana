var cantidad = 30;
var ticket = 'Revisión de Laptop';
var disponible = true;
var valor = 6;

if (cantidad > 0 && disponible) {
    console.log('Ticket disponible en el Sistema de Soporte Técnico');
}
else {
    console.log('Ticket no disponible en el Sistema de Soporte Técnico');
}

var tickets = ['Hardware', 'Software', 'Redes'];

for (var i = 0; i < tickets.length; i++) {
    console.log(tickets[i]);
}

var TicketEstado;
(function (TicketEstado) {
    TicketEstado[TicketEstado["Pendiente"] = 0] = "Pendiente";
    TicketEstado[TicketEstado["EnProceso"] = 1] = "EnProceso";
    TicketEstado[TicketEstado["Resuelto"] = 2] = "Resuelto";
})(TicketEstado || (TicketEstado = {}));

console.log(TicketEstado);
console.log(TicketEstado.Resuelto);
