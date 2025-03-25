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

# useActionState

```js
import React from "react";

function FormComponent() {
  const sendFile = async (formData) => {
    const response = await fetch("https://api.example.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el formulario");
    }

    return await response.json();
  };

  const [state, sendForm, isPending] = useActionState(sendFile, {
    success: null,
    message: "",
  });

  return (
    <form action={sendForm}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar"}
      </button>
      {state.success !== null && (
        <p>
          {state.success
            ? "¡Formulario enviado exitosamente!"
            : "Hubo un problema al enviar el formulario."}
        </p>
      )}
      {state.message && <p>{state.message}</p>}
    </form>
  );
}

export default FormComponent;
```

## Explicación del código:  

### Definición del formato del hook:  

``useActionState`` devuelve un estado general (state), una función para ejecutar la acción (sendForm) y un indicador de estado de carga (isPending).
En este caso, el estado inicial incluye success y message.  

### Función sendFile:
Define la lógica para enviar el formulario al backend mediante fetch.  

### Manejo de estados en el componente:  

``isPending`` desactiva el botón y cambia el texto según el estado.
``state.success`` indica si el formulario fue enviado exitosamente.
``state.message`` puede ser utilizado para mostrar un mensaje adicional, como un error o confirmación.  

### Resultado dinámico:  

Mensajes de éxito o error se muestran en función de los valores de state.  

### action={sendForm}

Este enfoque delega directamente el envío del formulario al hook, haciendo que sea más declarativo.
No necesitas escribir manualmente ``event.preventDefault()``, ya que el hook se encarga de evitar el comportamiento predeterminado de recarga.  

### Más limpio y simplificado:
Este patrón elimina la necesidad de un manejador explícito ``onSubmit``. Solo necesitas vincular tu acción al atributo action.  

### Resultados:
El hook también maneja el paso de los datos del formulario al backend, así que sendForm automáticamente recibe los valores del formulario como FormData.
