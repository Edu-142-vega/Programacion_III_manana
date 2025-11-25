"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _11_herencia_mp_1 = require("./11_herencia_mp");

var miTicket = new _11_herencia_mp_1.Ticket('Revisión de Laptop', 'Hardware');
console.log(miTicket.nombre);
console.log(miTicket.tipo);
miTicket.servirse();

var miTicketSecundario = new _11_herencia_mp_1.TicketSecundario('Instalación de Software', 'Software');
console.log(miTicketSecundario.nombre);
console.log(miTicketSecundario.tipo);
miTicketSecundario.servirse();
