import { Ticket } from "./09_acceso_mp";

const miTicket: Ticket = new Ticket('Revisión de Laptop');
console.log(miTicket.nombre);
console.log(miTicket.getCodigo());
console.log(miTicket.getAttributes());
