# POO con TypeScript

## 1. Clase con Tipado en TypeScript  

```ts 
class Auto {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  arrancar(): void {
    console.log(`El ${this.marca} ${this.modelo} está encendido.`);
  }
}

const miAuto = new Auto("Toyota", "Corolla");
miAuto.arrancar();
```

## 2. Encapsulamiento con Tipado  

En TypeScript, puedes usar el modificador de acceso private, protected o public para especificar qué propiedades o métodos deben ser accesibles fuera de la clase. También puedes usar tipado en los parámetros y el valor de retorno.
```ts
class CuentaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(monto: number): void {
    this.saldo += monto;
  }

  verSaldo(): number {
    return this.saldo;
  }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
console.log(cuenta.verSaldo()); // 1500
```

## 3. Herencia con Tipado  

El tipado se extiende también a las clases que heredan de otras. Los tipos se transmiten a través de las clases base y derivadas.
```ts
class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacerSonido(): void {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log("Guau guau!");
  }
}

const miPerro = new Perro("Firulais");
miPerro.hacerSonido();
```

## 4. Polimorfismo con Tipado  

También puedes aplicar polimorfismo y especificar los tipos de retorno y los parámetros de los métodos.
```ts
class Ave {
  volar(): void {
    console.log("Algunas aves pueden volar");
  }
}

class Pinguino extends Ave {
  volar(): void {
    console.log("Los pingüinos no pueden volar");
  }
}

const pajaro: Ave = new Ave();
pajaro.volar();

const pinguino: Ave = new Pinguino();
pinguino.volar();
```

# Métodos Alternativos en TypeScript  

## Los otros métodos de creación de objetos en JavaScript, como los objetos literales, funciones constructoras y prototipos, también se pueden usar en TypeScript, pero con tipado.  

## 1. Objetos Literales con Tipado
```ts
const auto: { marca: string; modelo: string; arrancar: () => void } = {
  marca: "Toyota",
  modelo: "Corolla",
  arrancar() {
    console.log(`El ${this.marca} ${this.modelo} está encendido.`);
  },
};

auto.arrancar();
```

## 2. Funciones Constructoras con Tipado  

```ts
function Auto(marca: string, modelo: string): void {
  this.marca = marca;
  this.modelo = modelo;
}

Auto.prototype.arrancar = function (): void {
  console.log(`El ${this.marca} ${this.modelo} está encendido.`);
};

const miAuto = new Auto("Toyota", "Corolla");
miAuto.arrancar();
```

## 3. Prototipos con Tipado  

```ts
const vehiculo = {
  arrancar(): void {
    console.log("El vehículo está en marcha.");
  },
};

const moto = Object.create(vehiculo);
moto.arrancar(); // Hereda el método arrancar()
```

## Conclusión  

En TypeScript la POO es básicamente la misma que en JavaScript, pero con el valor añadido de los tipados estáticos, lo que te permite asegurar que las propiedades y métodos tengan los tipos correctos en tiempo de compilación.
Así que sí, el concepto es el mismo, pero con TypeScript añades la ventaja de poder especificar tipos para todo, lo cual te ayuda a evitar errores y a hacer el código más robusto y legible.

