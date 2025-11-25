import { Ticket, TicketSecundario } from "./11_herencia_mp.js";

const miTicket = new Ticket('Revisión de Laptop', 'Hardware');
console.log(miTicket.nombre);
console.log(miTicket.tipo);
miTicket.servirse();

const miTicketSecundario = new TicketSecundario('Instalación de Software', 'Software');
console.log(miTicketSecundario.nombre);
console.log(miTicketSecundario.tipo);
miTicketSecundario.servirse();
