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
