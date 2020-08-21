## Polymorphism in Typescript

 The Google definition of polymorphism is, `“the condition of occurring in several different forms.”` So how does this relate to OOP? Well it is the ability for specific classes or objects to be referenced in their more general sense, to then preform an action shared amongst multiple sub types.

 In this example I'm going to show you how I implement polymorphism with `Typescript`.

 First of all, we have an `interface` call IEmployee, in this interface I've defined the contract for implement in all the `classes`.
```typescript
export default interface Empleado {
    nombre: string;
    pago(cantidad: number): void;
    tipo(): void;
    about(): string;
}
```