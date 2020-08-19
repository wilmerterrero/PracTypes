import IEmpleado from './IEmpleado';

export default class EmpleadoTemporal implements IEmpleado {
    nombre: string;
    _pago: number;
    

    public pago(): number{
        const sueldoBase = 5000
        return this._pago + sueldoBase;
    }

    public tipo(): string{
        return `Temporal`
    }

    public about(){
        return `${this.nombre} ${this.pago()} ${this.tipo()}`
    }

    constructor(nombre: string, pago: number){
        this.nombre = nombre;
        this._pago = pago;
    }
}