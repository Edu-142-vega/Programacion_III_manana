"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;

var Ticket = /** @class */ (function () {
    function Ticket(nombre) {
        this.idSoporte = '99182898982988';
        this.nombre = nombre;
        this.generarCodigo();
    }

    Ticket.prototype.generarCodigo = function () {
        this.codigo = (new Date()).toDateString();
    };

    Ticket.prototype.getCodigo = function () {
        return this.codigo;
    };

    Ticket.prototype.getAttributes = function () {
        return {
            nombre: this.nombre,
            codigo: this.codigo,
            id: this.idSoporte
        };
    };

    return Ticket;
}());

exports.Ticket = Ticket;
