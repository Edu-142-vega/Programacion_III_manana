export class Plato {
    public nombre: string;
    public tipo: string;
    constructor(
        nombre: string,
        tipo: string
    ){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    servirse(): void {
        console.log('Plato listo para servirse en el Restaurante Cumbre');
    }
}
export class Postre extends Plato {}
