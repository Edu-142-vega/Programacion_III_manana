class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar() {
        console.log("Empleado atendiendo tickets de soporte . . .");
    }
    calcularPropina() {
        return this.salario * 0.15;
    }
    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 3;
    }
}

class TecnicoSenior extends Empleado {
    calcularPropina() {
        return this.salario * 0.20;
    }
}

class TecnicoJunior extends Empleado {
    calcularPropina() {
        return this.salario * 0.10;
    }
}

const tecnicoPedro = new TecnicoSenior('Pedro', 2000);
const tecnicoJuan = new TecnicoJunior('Juan', 1200);

tecnicoPedro.trabajar();
tecnicoJuan.trabajar();
console.log(tecnicoPedro.calcularPropina());
console.log(tecnicoJuan.calcularPropina());
console.log(tecnicoPedro.horasExtra(5));
console.log(tecnicoJuan.horasExtra(4));
