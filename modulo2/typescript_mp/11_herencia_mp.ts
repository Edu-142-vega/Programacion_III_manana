export class Ticket {
    public nombre: string;
    public tipo: string;

    constructor(
        nombre: string,
        tipo: string
    ) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    servirse(): void {
        console.log('Ticket listo para procesarse en el Sistema de Soporte Técnico');
    }
}

export class TicketSecundario extends Ticket {}
