<div align="center">
<h1>TYPESCRIPT</h1>
</div>

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

## 2. Funciones con Tipado en TypeScript

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

useState
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

useEffect

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
useRef

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




