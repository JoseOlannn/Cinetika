# 🎬 Cinetika — Backend (API REST)

> API RESTful para la plataforma **Cinetika**, un explorador de contenido audiovisual con estética retro ochentera, inspirada en el **arte pop** y la **Bauhaus**.

---

## 📌 1. Descripción General

Este repositorio contiene el **Backend** del proyecto Cinetika. Proporciona una API REST modular construida sobre **Node.js** y **Express.js**, encargada de la lógica de negocio, autenticación, gestión de usuarios y consulta del catálogo de películas, series y cortometrajes almacenados en **MongoDB**.

---

## 🛠️ 2. Stack Tecnológico

| Capa / Herramienta | Tecnología | Descripción |
|--------------------|------------|-------------|
| **Entorno de Ejecución** | [Node.js](https://nodejs.org/) (v18+) | Plataforma para ejecutar JavaScript del lado del servidor. |
| **Framework Web** | [Express.js](https://expressjs.com/) | Framework minimalista y flexible para la creación de rutas, controladores y middlewares. |
| **Base de Datos** | [MongoDB](https://www.mongodb.com/) | Base de datos NoSQL documental para almacenar usuarios y catálogo audiovisual. |
| **ODM** | [Mongoose](https://mongoosejs.com/) | Modelado de datos orientado a objetos y esquemas con validaciones para MongoDB. |
| **CORS** | [cors](https://www.npmjs.com/package/cors) | Middleware para habilitar intercambio de recursos de origen cruzado con el frontend (React + Vite). |
| **Configuración** | [dotenv](https://www.npmjs.com/package/dotenv) | Carga de variables de entorno desde archivos `.env`. |

---

## 📁 3. Estructura del Proyecto

El backend sigue una arquitectura limpia basada en separación de responsabilidades (**MVC - Modelos, Controladores y Rutas**):

```text
CinetikaBack/
├── controllers/          # Controladores: lógica de negocio y peticiones/respuestas
├── models/               # Modelos: esquemas y datos (Mongoose)
├── routes/               # Rutas: definición de endpoints de la API
├── .env.example          # Plantilla de variables de entorno
├── .gitignore            # Exclusión de node_modules, .env y temporales
├── CONTRIBUTING.md       # Reglas de ramas, commits y Pull Requests
├── package.json          # Metadatos del proyecto, dependencias y scripts
└── README.md             # Documentación del backend
```

---

## 🎯 4. Alcance y Funcionalidades del Backend

* 🔐 **Gestión de Usuarios y Roles:**
  * Registro de usuarios y control de acceso.
  * Diferenciación de roles (`usuario` y `administrador`).
  * Perfil de usuario con soporte de avatar personalizado o por defecto.
* 🎞️ **Gestión de Catálogo Audiovisual:**
  * Películas, series y cortometrajes.
  * Metadatos: póster, título, año de estreno, duración, sinopsis, calificación y géneros.
* 🔎 **Búsquedas y Filtros:**
  * Búsqueda por título.
  * Filtrado por género y categoría.

---

## 🚀 5. Instalación y Puesta en Marcha

### Requisitos Previos
* [Node.js](https://nodejs.org/) versión 18 o superior.
* [MongoDB](https://www.mongodb.com/) (instancia local en ejecución o clúster en [MongoDB Atlas](https://www.mongodb.com/atlas)).

### 1. Clonar el repositorio y navegar a la carpeta
```bash
git clone https://github.com/JoseOlannn/Cinetika.git
cd CinetikaBack
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Copia el archivo `.env.example` y renómbralo a `.env`:
```bash
cp .env.example .env
```
Configura las variables según tu entorno:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/cinetika
```

### 4. Iniciar el servidor

* **Modo desarrollo (con reinicio automático al guardar cambios):**
  ```bash
  npm run dev
  ```

* **Modo producción:**
  ```bash
  npm start
  ```

El servidor estará disponible en: `http://localhost:4000`

---

## 📡 6. Endpoints Base

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/` | Comprobación de salud de la API (Health check) |
| `GET` | `/api/users` | Obtener la lista de usuarios |
| `GET` | `/api/users/:id` | Obtener un usuario por su ID |
| `POST` | `/api/users` | Registrar un nuevo usuario |

---

## 🤝 7. Flujo de Trabajo y Contribuciones

Para mantener el código ordenado y estable, consulta [CONTRIBUTING.md](./CONTRIBUTING.md):
* Está **prohibido subir directamente a `main`**.
* Todo cambio debe desarrollarse en una rama propia (`feat/`, `fix/`, `docs/`, `refactor/`) y pasar por un Pull Request aprobado.
* Nunca subir al repositorio credenciales ni dependencias (`node_modules/`, `.env`).
