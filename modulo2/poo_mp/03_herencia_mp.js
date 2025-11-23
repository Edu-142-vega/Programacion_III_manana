class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
    }
    realizarAccion() {
        console.log("Realiza una tarea en el soporte técnico");
    }
}

class Tecnico extends Empleado {}

const tecnico = new Tecnico('Andrés');
const empleado = new Empleado('Lucía');

tecnico.realizarAccion();
empleado.realizarAccion();
