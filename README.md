# 🎬 Cinetika — Explorador de Películas y Series

> Plataforma para explorar contenido audiovisual con una estética **retro ochentera**, inspirada en el **arte pop** y la **Bauhaus**.

---

## 1. Descripción General y Objetivo del MVP

**Nombre del proyecto:** Cinetika — Explorador de Películas y Series

**Objetivo del MVP:**
Crear una plataforma funcional donde los usuarios puedan **registrarse**, **explorar un catálogo** de contenido audiovisual (películas, series y cortometrajes), **buscar títulos** y **consultar sus detalles**, bajo una temática visual retro inspirada en los años 80 y el arte pop / Bauhaus.

---

## 2. Alcance Funcional del MVP

### 🔐 Registro e inicio de sesión
- Crear cuenta e iniciar sesión.
- Cerrar sesión.
- Diferenciar roles de usuario (por ejemplo: `usuario` y `administrador`).

### 🎞️ Catálogo de películas y series
- Mostrar películas, series y cortometrajes.
- Mostrar póster, nombre, año y categoría (tipo de contenido).
- Organizar el contenido por géneros.
- Temática visual retro, inspirada en los años 80 y el arte pop / Bauhaus.

### 🔎 Búsqueda y filtros
- Buscar por nombre.
- Filtrar por género y tipo de contenido.
- Explorar títulos.

### 📄 Detalles del contenido
- Mostrar sinopsis, año, género, duración y calificación.

### 👤 Perfil de usuario
- Mostrar nombre, correo y foto de perfil.
- Permitir editar la información básica.
- Utilizar una foto predeterminada si el usuario no ha configurado una.

---

## 3. Tecnologías a Utilizar

| Capa | Tecnología | Uso |
|------|------------|-----|
| **Frontend** | [React](https://react.dev/) | Construcción de la interfaz de usuario basada en componentes. |
| **Build / Dev Server** | [Vite](https://vitejs.dev/) | Entorno de desarrollo rápido y empaquetado del frontend. |
| **Base de datos** | [MongoDB](https://www.mongodb.com/) | Almacenamiento de usuarios, roles, catálogo de contenido y géneros. |

> [!NOTE]
> Para conectar React con MongoDB se requiere una capa de API (por ejemplo **Node.js + Express** con **Mongoose**), ya que el navegador no debe acceder directamente a la base de datos.

---

## 4. Modelo de Datos (propuesta inicial)

### `users`
| Campo | Tipo | Descripción |
|-------|------|-------------|
| `name` | String | Nombre del usuario |
| `email` | String (único) | Correo electrónico |
| `password` | String (hash) | Contraseña cifrada |
| `role` | String | `usuario` \| `administrador` |
| `avatar` | String | URL de la foto (usa una predeterminada si está vacío) |

### `contents`
| Campo | Tipo | Descripción |
|-------|------|-------------|
| `title` | String | Nombre del título |
| `type` | String | `pelicula` \| `serie` \| `cortometraje` |
| `year` | Number | Año de estreno |
| `genres` | [String] | Géneros asociados |
| `synopsis` | String | Sinopsis |
| `duration` | Number | Duración en minutos |
| `rating` | Number | Calificación |
| `poster` | String | URL del póster |

---

## 5. Estructura del Proyecto (sugerida)

```
Cinetika/
├── client/            # Frontend (Vite + React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── vite.config.js
├── server/            # API (Node.js + Express + MongoDB)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── index.js
└── README.md
```

---

## 6. Instalación y Ejecución

### Requisitos previos
- [Node.js](https://nodejs.org/) 18 o superior
- [MongoDB](https://www.mongodb.com/) local o una instancia en MongoDB Atlas

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

### Variables de entorno (`server/.env`)
```env
MONGODB_URI=mongodb://localhost:27017/cinetika
JWT_SECRET=tu_clave_secreta
PORT=4000
```

---

## 7. Estilo Visual

- 🎨 Paleta inspirada en los años 80: colores primarios intensos, neones y contrastes fuertes.
- 🔷 Formas geométricas propias de la Bauhaus (círculos, triángulos, rectángulos).
- 🖼️ Elementos de arte pop: tipografías gruesas, bloques de color y composiciones llamativas.

---

## 8. Licencia

Proyecto académico / de uso interno. Licencia por definir.
