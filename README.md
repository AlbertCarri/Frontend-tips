# Frontend-tips

## INDEX  
* [POO, programación orientada a objetos](https://github.com/AlbertCarri/Frontend-tips/blob/main/POO/poo.md)

# useEffect en React: Cómo y Cuándo Usarlo  
El hook `useEffect` se usa para manejar efectos secundarios en componentes funcionales.  

## 📌 Ejemplo básico  
```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("El componente se montó");
  }, []);

  return <h1>Hola Mundo</h1>;
}

```
## Index  

Hook useActionState: [useActionState](https://github.com/AlbertCarri/Frontend-tips/blob/main/Hooks/useActionState.md)
