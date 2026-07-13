# Palabras Encadenadas

Trabajo final para la materia Construccion de Interfaces de Usuario.

El proyecto es un juego hecho con React en el que se ingresan palabras para armar una cadena. La primera palabra puede ser cualquiera. A partir de la segunda, cada palabra tiene que empezar con la ultima letra de la palabra anterior.

Las palabras se validan contra la API indicada por la catedra. Si una palabra no existe, ya fue usada o no respeta la cadena, se muestra un mensaje y no se agrega a la partida.

## Funcionalidades

- Ingreso de palabras.
- Validacion de palabras con API.
- Control de palabras repetidas.
- Validacion de la regla de encadenamiento.
- Puntaje acumulado.
- Temporizador de 15 segundos por turno.
- Pantalla de fin de partida.
- Reinicio de partida.
- Leaderboard local con los mejores puntajes.

## Instalacion

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd unq-ui-carolina-ciampini-trabajo-final
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

La aplicacion estara disponible en http://localhost:5173 o en el puerto que indique Vite.

## Tecnologias

- React
- TypeScript
- Vite
- TailwindCSS

## API

La validacion de palabras usa el siguiente endpoint:

```txt
https://word-api-hmlg.vercel.app/api/validate?word=<palabra>
```
