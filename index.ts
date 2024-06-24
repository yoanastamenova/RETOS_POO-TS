// RETO 1

class Persona {
    protected nombre: string
    protected edad: number
    protected DNI: string
    protected sexo: (string | string)
    protected peso: number
    protected altura: number

    constructor(nombre: string = '',
        edad: number = 0,
        DNI: string = '',
        sexo: string | string,
        peso: number = 0,
        altura: number = 0
    )  {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}

const persona1 = new Persona('Yoana', 28, '442234Y', 'M', 55, 175);
const persona2 = new Persona('Elena', 28, '12345678M', 'M', 60, 165);
const persona3 = new Persona('Ivan', 35, '87654321J', 'H', 75, 180);

// RETO 2

class Password {
    longitud: any[]
    contrasena: string

    constructor(longitud: string, contrasena: string) {
        this.longitud = longitud
        this.contrasena = contrasena
    }

    public randomPass() {
        return
    }
}
const Contrase = new Password('longitud', '12345')
// RETO 3

class Electrodomestico {
    precioBase: number
    color: string
    consumo: string
    peso: number

    constructor(precioBase: number, color: string, consumo: string, peso: number) {
        this.precioBase = precioBase
        this.color = color
        this.consumo = consumo
        this.peso = peso
    }
}