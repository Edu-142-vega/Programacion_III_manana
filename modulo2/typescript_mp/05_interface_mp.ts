export interface Empleado {
    id: number;
    nombre: string;
    correo?: string;
}

const empleado1: Empleado = {
    id: 1,
    nombre: "Carlos",
    correo: "carlos@mail.com"
};

const empleado2: Empleado = {
    id: 2,
    nombre: "Ana",
    correo: "ana@gmail.com"
};
