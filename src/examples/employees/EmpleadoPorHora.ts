import IEmpleado from './IEmpleado';

export default class EmpleadoPorHora implements IEmpleado {
    nombre: string;
    _pago: number;

    public pago(){
        const cantidad = 18;
        let total = this._pago * cantidad;
        return total;
    }

    public tipo() {
        return `Por hora`;
    }

    public about(){
        return `${this.nombre} ${this.pago()} ${this.tipo()}`
    }

    constructor(nombre: string, pago: number){
        this.nombre = nombre;
        this._pago = pago;
    }
}