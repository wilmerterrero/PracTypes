export default interface Empleado {
    nombre: string;
    pago(cantidad: number): void;
    tipo(): void;
    about(): string;
}