export {};

var cantidad: number = 30;
var ticket: string = 'Revisión de Laptop';
var disponible: boolean = true;
var valor: any = 6;

var tickets: string[] = ['Hardware', 'Software', 'Redes'];

enum TicketEstado {
    Pendiente,
    EnProceso,
    Resuelto
}

console.log(TicketEstado);
console.log(TicketEstado.Resuelto);

