import { Ticket } from "./11_herencia_mp";

export class TicketEspecial extends Ticket {
    getTipoPreparacion(): void {
        console.log('Revisión especial realizada por el técnico senior');
    }
}

const miTicketEspecial =
    new TicketEspecial('Mantenimiento Avanzado', 'Servicio Especial');

console.log(miTicketEspecial.nombre);
console.log(miTicketEspecial.tipo);
miTicketEspecial.servirse();
miTicketEspecial.getTipoPreparacion();
