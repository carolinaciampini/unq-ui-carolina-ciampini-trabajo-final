# Palabras Encadenadas - Trabajo Final UNQ UI

Aplicacion desarrollada con React, TypeScript y Vite para la materia Construccion de Interfaces de Usuario.

## Funcionalidades

La aplicacion permite jugar a Palabras Encadenadas con las siguientes caracteristicas:

- **Ingreso de palabras**: El jugador puede ingresar palabras para construir una cadena.
- **Validacion con diccionario**: Cada palabra se valida usando la API provista por la catedra.
- **Regla de encadenamiento**: Cada palabra debe empezar con la ultima letra de la palabra anterior.
- **Control de palabras repetidas**: No se pueden reutilizar palabras dentro de la misma partida.
- **Sistema de puntuacion**: Cada letra de una palabra valida suma un punto.
- **Temporizador por turno**: Cada turno dura 15 segundos y se reinicia con cada palabra valida.
- **Feedback visual**: Se informa si una palabra no existe, ya fue utilizada o no respeta la cadena.
- **Fin de partida**: Cuando se termina el tiempo, se muestra el puntaje final y la cantidad de palabras validas.
- **Reinicio de partida**: Se puede iniciar una nueva partida al finalizar.

## Instalacion y uso

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd unq-ui-carolina-ciampini-trabajo-final
```

2. Instalar las dependencias:

```bash
npm install
```

3. Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

La aplicacion estara disponible en `http://localhost:5173` o en el puerto que indique Vite.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- TailwindCSS
- React Icons

## API utilizada

Para validar si una palabra existe en el diccionario espanol se utiliza la API provista por la catedra:

```txt
https://word-api-hmlg.vercel.app/api/validate?word=<palabra>
```
