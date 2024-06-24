// RETO 1

class Persona {
    protected nombre: string
    protected edad: number
    protected DNI: string[]
    protected sexo: (string | string)
    protected peso: number
    protected altura: number

    constructor(nombre:string, edad: number, DNI: string[],) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }
}

// RETO 2

class Password {
    longitud: any[]
    contrasena: string

    constructor(longitud: string, contrasena: string) {
        this.longitud = longitud
        this.contrasena = contrasena
    }
}

// RETO 3

class Electrodomestico {
    precioBase: number
    color: string
    consumo: string
    peso: number

    constructor(precioBase: number, color:string, consumo:string, peso:number){
        this.precioBase = precioBase
        this.color = color
        this.consumo = consumo
        this.peso= peso
    }
}