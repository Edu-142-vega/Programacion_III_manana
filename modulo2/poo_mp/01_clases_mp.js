class Ticket {
    constructor(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo;
    }

    diagnosticar() {
        console.log(`${this.numero} (${this.tipo}) está en diagnóstico`);
    }

    procesar() {
        console.log(`${this.numero} (${this.tipo}) está siendo procesado`);
    }

    finalizar() {
        console.log(`${this.numero} (${this.tipo}) ha sido resuelto`);
    }
}

const miTicket = new Ticket("Ticket 501", "Hardware");
miTicket.diagnosticar();
miTicket.procesar();
miTicket.finalizar();
