"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSecundario = exports.Ticket = void 0;

var Ticket = /** @class */ (function () {
    function Ticket(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    Ticket.prototype.servirse = function () {
        console.log('Ticket listo para ser procesado en el Sistema de Soporte Técnico');
    };
    return Ticket;
}());
exports.Ticket = Ticket;

var TicketSecundario = /** @class */ (function (_super) {
    __extends(TicketSecundario, _super);
    function TicketSecundario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TicketSecundario;
}(Ticket));
exports.TicketSecundario = TicketSecundario;
