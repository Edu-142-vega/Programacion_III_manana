"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _09_acceso_mp_1 = require("./09_acceso_mp");

var miTicket = new _09_acceso_mp_1.Ticket('Revisión de Laptop');
console.log(miTicket.nombre);
console.log(miTicket.getCodigo());
console.log(miTicket.getAttributes());
