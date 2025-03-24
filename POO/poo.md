# Guía Práctica de Programación Orientada a Objetos (POO)

## ¿Qué es la Programación Orientada a Objetos?

Es un paradigma de programación basado en la creación y manipulación de objetos, los cuales agrupan datos y comportamientos en una sola entidad. Se usa para escribir código modular, reutilizable y fácil de mantener.  

Conceptos Claves:  

## 1. Clases y Objetos  

•	``Clase``: Es un molde o plantilla para crear objetos.  
•	``Objeto``: Es una instancia de una clase.  

Ejemplo en JavaScript con class:  
```js
class Auto {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  arrancar() {
    console.log(`El ${this.marca} ${this.modelo} está encendido.`);
  }
}

const miAuto = new Auto("Toyota", "Corolla");
miAuto.arrancar();
```

## 2. Encapsulamiento  

Oculta los datos internos de un objeto y solo permite acceder a ellos mediante métodos específicos.
```js
class CuentaBancaria {
  #saldo; // Propiedad privada
  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }
  depositar(monto) {
    this.#saldo += monto;
  }
  verSaldo() {
    return this.#saldo;
  }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
console.log(cuenta.verSaldo()); // 1500
```

## 3. Herencia  

Permite crear nuevas clases basadas en una clase existente, reutilizando su funcionalidad.
```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hacerSonido() {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Guau guau!");
  }
}

const miPerro = new Perro("Firulais");
miPerro.hacerSonido();
```

## 4. Polimorfismo  

Permite que diferentes clases usen el mismo método pero con comportamientos distintos.  
```js
class Ave {
  volar() {
    console.log("Algunas aves pueden volar");
  }
}

class Pinguino extends Ave {
  volar() {
    console.log("Los pingüinos no pueden volar");
  }
}

const pajaro = new Ave();
pajaro.volar();
const pinguino = new Pinguino();
pinguino.volar();
```

# Métodos Alternativos para Crear Objetos en JavaScript  

## 1. Objetos Literales  

Se crean directamente con llaves {} y pueden contener propiedades y métodos.
```js
const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  arrancar() {
    console.log(`El ${this.marca} ${this.modelo} está encendido.`);
  }
};

auto.arrancar();
```

## 2. Funciones Constructoras  

Antes de class, se usaban funciones constructoras para crear objetos.
```js
function Auto(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

Auto.prototype.arrancar = function () {
  console.log(`El ${this.marca} ${this.modelo} está encendido.`);
};

const miAuto = new Auto("Toyota", "Corolla");
miAuto.arrancar();
```

## 3. Prototipos  

JavaScript usa prototipos en lugar de clases tradicionales.  
```js
const vehiculo = {
  arrancar() {
    console.log("El vehículo está en marcha.");
  }
};

const moto = Object.create(vehiculo);
moto.arrancar(); // Hereda el método arrancar()
```
## Beneficios de POO
✅ Código reutilizable y modular.  
✅ Más fácil de mantener y escalar.   
✅ Separa la lógica y los datos para mejor organización.  

Con esta guía ya puedes empezar a aplicar POO en JavaScript o cualquier otro lenguaje que la soporte. ¡Practica creando tus propias clases y objetos! 🚀

