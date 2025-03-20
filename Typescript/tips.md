

<div align="center">
<img src="/publics/typescript.png"/>
</div>

<br>
<br>

# ` Usos de TypeScript `

## 1. Tipado de Variables y Constantes

``` tsx
const nombre: string = "Alberto";
let edad: number = 52;
const esProgramador: boolean = true;

const coordenadas: { lat: number; lon: number } = { lat: -34.6037, lon: -58.3816 };

// Con alias de tipo
type Coordenadas = { lat: number; lon: number };
const ubicacion: Coordenadas = { lat: -34.6037, lon: -58.3816 };
```
<br>

### **Puntos Clave:**  


**let** y **const**   son las formas más comunes (evita var porque tiene un alcance más confuso).

<br>

``TypeScript`` puede inferir tipos automáticamente si inicializas una variable durante su declaración:

```tsx
let ciudad = "Buenos Aires"; // TypeScript infiere el tipo como string
```

<br>


### Tipos Básicos
TypeScript agrega tipos específicos para las variables. Los más comunes son:

``number``: Números (enteros o decimales).

``string``: Cadenas de texto.

``boolean``: Verdadero o falso.

``any``: Puede contener cualquier tipo (úsalo con cuidado, porque pierde el beneficio del tipado).

``null y undefined``: Representan ausencia de valor.

``unknown``: Similar a any, pero más seguro, ya que requiere que compruebes el tipo antes de usarlo.

Ejemplo:

```tsx
let temperatura: number = 25.5;
let mensaje: string = "¡Hola, TypeScript!";
let activo: boolean = true;
let sinTipo: any = "Podría ser cualquier cosa";
```

<br>


### Tipos Complejos
Además de los básicos, puedes manejar tipos más complejos para modelar datos:

Arreglos:

```tsx
let numeros: number[] = [1, 2, 3];
let palabras: string[] = ["hola", "mundo"];
```

Tuplas: Arreglos con un número fijo de elementos y tipos específicos para cada posición:
```tsx
let coordenadas: [number, number] = [40.7128, -74.0060];
```

Objetos: Puedes usar interfaces o tipos para describirlos (más sobre esto adelante):

```tsx
let usuario: { nombre: string; edad: number } = { nombre: "Ana", edad: 25 };
```

<br>


### Tipos Personalizados
Con interfaces o type, puedes definir tus propios tipos para hacer el código más legible.

Interfaces:
Sirven para definir la estructura de un objeto.

```tsx
interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
}

let usuario: Usuario = { nombre: "Carlos", edad: 33, activo: true };
```

Tipos (type):
Similares a las interfaces, pero más flexibles (puedes usarlo para tuplas, uniones, etc.).

```tsx
type Coordenadas = [number, number];

let posicion: Coordenadas = [40.7128, -74.0060];
```

<br>


### Uniones de Tipos
Puedes permitir que una variable tenga más de un tipo usando el operador |.

```tsx
let identificador: string | number;
identificador = "123";
identificador = 123; // Ambos son válidos
```

<br>


### Tipos Opcionales y Valores por Defecto
Propiedades Opcionales: Usa ? para declarar propiedades opcionales.

```tsx
interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string; // Puede estar o no
}
```

## 2. Funciones con Tipado en TypeScript
Tipo de Retorno de Funciones
Especifica qué tipo de valor devuelve la función. TypeScript puede inferirlo, pero declararlo explícitamente es recomendable.
```tsx
// Función con parámetros y retorno tipado
function sumar(a: number, b: number): number {
  return a + b;
}

// Función con un tipo que puede ser `string` o `number`
function formatearDato(dato: string | number): string {
  return `El dato es: ${dato}`;
}

// Función que no devuelve nada (void)
function mostrarMensaje(mensaje: string): void {
  console.log(mensaje);
}
```
<br>

## 3. Funciones Flecha con TypeScript

```tsx
const restar = (a: number, b: number): number => a - b;

const obtenerSaludo = (nombre: string): string => `Hola, ${nombre}!`;
```
<br>

## 4.Export Default en Funciones

```tsx
// Exportando una función como `default`
export default function obtenerFecha(): string {
  return new Date().toLocaleDateString();
}
```
<br>

## 5.Tipado de Props en Componentes de React

```tsx
interface BotonProps {
  texto: string;
  onClick: () => void;
}

const Boton: React.FC<BotonProps> = ({ texto, onClick }) => {
  return <button onClick={onClick}>{texto}</button>;
};
```
<br>

##  6. Tipado de Componentes con [export default]

```tsx
interface CardProps {
  titulo: string;
  contenido: string;
}

export default function Card({ titulo, contenido }: CardProps): JSX.Element {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}
```
<br>

## 7. Uso de Hooks con TypeScript

#### useState
```tsx
import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState<number>(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};
```

#### useEffect

```tsx
import { useEffect, useState } from "react";

const Reloj = () => {
  const [hora, setHora] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return <p>Hora actual: {hora}</p>;
};
```
#### useRef

```tsx
import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const manejarClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe algo..." />
      <button onClick={manejarClick}>Enfocar</button>
    </div>
  );
};
```

#### useActionState
```tsx
"use client";

import { useActionState } from "react";
import { useState } from "react";

// Definimos el tipo de la acción
type FormState = { mensaje: string };
type FormAction = (prevState: FormState, formData: FormData) => Promise<FormState>;

const enviarFormulario: FormAction = async (prevState, formData) => {
  const nombre = formData.get("nombre") as string;
  if (!nombre) {
    return { mensaje: "El nombre es obligatorio" };
  }

  // Simulamos una petición asincrónica
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { mensaje: `Formulario enviado con éxito. Hola, ${nombre}!` };
};

export default function Formulario() {
  const [state, action] = useActionState<FormState, FormAction>(enviarFormulario, {
    mensaje: "",
  });

  return (
    <form action={action}>
      <input name="nombre" placeholder="Escribe tu nombre" />
      <button type="submit">Enviar</button>
      <p>{state.mensaje}</p>
    </form>
  );
}
```

#### useTransition
```tsx
"use client";

import { useTransition, useState } from "react";

export default function CargaLenta() {
  const [isPending, startTransition] = useTransition();
  const [contador, setContador] = useState(0);

  const manejarClick = () => {
    startTransition(() => {
      // Simulamos una tarea pesada con un setTimeout
      setTimeout(() => {
        setContador((prev) => prev + 1);
      }, 1000);
    });
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={manejarClick} disabled={isPending}>
        {isPending ? "Cargando..." : "Incrementar"}
      </button>
    </div>
  );
}
```
<br>

# 8. Tipado de Fetch y API Requests

```tsx
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

const obtenerUsuarios = async (): Promise<Usuario[]> => {
  const respuesta = await fetch("https://api.example.com/usuarios");
  const datos: Usuario[] = await respuesta.json();
  return datos;
};
```
<br>

## 9. Tipado de Context API

```tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  usuario: string | null;
  login: (nombre: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<string | null>(null);

  const login = (nombre: string) => setUsuario(nombre);
  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const contexto = useContext(AuthContext);
  if (!contexto) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return contexto;
};
```
<br>

## 10. Tipado de Rutas con Next.js (app router y API routes)
#### Rutas en el App Router (app/)

```tsx
export default function Pagina(): JSX.Element {
  return <h1>Página en Next.js con TypeScript</h1>;
}
```
#### API Routes en Next.js

```tsx
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({ mensaje: "Hola desde la API de Next.js" });
}
```

<br>

## 18. Manejo de Nulos y Undefined
TypeScript incluye el modo estricto (strictNullChecks), donde obliga a manejar null y undefined explícitamente.

Solución: Comprobaciones o coalescencia nula
Comprobación con if:

```tsx
let valor: string | null = null;

if (valor !== null) {
  console.log(valor.toUpperCase());
}
```
Coalescencia Nula (??): Define un valor por defecto.

```tsx
let valor: string | null = null;
let resultado = valor ?? "Valor por defecto"; // "Valor por defecto"
```

<br>


## 19. Tipos Generics
Los genéricos permiten crear funciones, clases o interfaces que funcionan con múltiples tipos sin perder el tipado.

```tsx
function identidad<T>(valor: T): T {
  return valor;
}

console.log(identidad<number>(42)); // 42
console.log(identidad<string>("Hola")); // "Hola"
```

<br>


## 20. Utilidades Avanzadas
TypeScript tiene herramientas avanzadas para trabajar con tipos:

Type Assertions: Úsalo para decirle a TypeScript que confíe en ti sobre un tipo.

```tsx
let valor: any = "Hola";
let longitud: number = (valor as string).length;
```

Tipos Literales: Limita el valor de una variable.

```tsx
let direccion: "Norte" | "Sur" | "Este" | "Oeste";
direccion = "Norte"; // Correcto
direccion = "Arriba"; // Error
```

Utility Types: TypeScript tiene herramientas como Partial, Required, Pick, Omit, entre otros, para manipular tipos.

```tsx
interface Usuario {
  nombre: string;
  edad: number;
}

let parcial: Partial<Usuario> = { nombre: "Juan" }; // Solo una parte del tipo
```




