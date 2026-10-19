# Reglas de Trabajo en GitHub — Proyecto Cinetika

Para evitar conflictos de código y mantener estable el proyecto, **nadie puede hacer `push` directo a la rama `main`**. Todo cambio debe entrar mediante una rama propia y un **Pull Request (PR)** aprobado.

---

## 1. Reglas Principales
1. **Prohibido subir directo a `main`:** La rama `main` está bloqueada. Solo recibe código probado mediante Pull Requests.
2. **Una rama por tarea:** Nunca trabajes dos funciones distintas en la misma rama.
3. **Código que no corre, no se sube:** Antes de abrir un Pull Request, verifica que el proyecto compile/ejecute sin errores en tu computadora.
4. **Prohibido subir archivos basura o credenciales:** Nunca subas carpetas de dependencias (`node_modules/`, `venv/`, `.env`) ni contraseñas.

---

## 2. Nomenclatura de Ramas
Toda rama debe crearse a partir de `main` usando uno de estos prefijos en minúsculas y separado por guiones:

* `feat/nombre-de-funcion` -> Para funciones o pantallas nuevas (ej. `feat/login-usuarios`).
* `fix/nombre-del-error` -> Para corregir un bug o error (ej. `fix/error-carrito`).
* `docs/tema` -> Para cambios en documentación o README (ej. `docs/diagrama-bd`).
* `refactor/modulo` -> Para mejoras de código que no cambian cómo funciona (ej. `refactor/consultas-sql`).

---

## 3. Formato de Commits
Escribe mensajes claros que digan qué hiciste:
* `[FEAT] Agrega validación de correo en registro`
* `[FIX] Corrige cálculo de total en reservación`
* `[DOCS] Actualiza instrucciones de instalación`

---

## 4. Paso a paso para subir tus cambios

### Paso A: Actualizar tu `main` antes de empezar
```bash
git checkout main
git pull origin main
```

### Paso B: Crear tu rama de trabajo
```bash
git checkout -b feat/tu-tarea
```

### Paso C: Guardar cambios y subir tu rama
```bash
git add .
git commit -m "[FEAT] Describe brevemente qué hiciste"
git push -u origin feat/tu-tarea
```

### Paso D: Abrir el Pull Request en GitHub
1. Entra a https://github.com/JoseOlannn/Cinetika.
2. Haz clic en el botón verde **Compare & pull request**.
3. Llena la descripción explicando qué hiciste y asigna a un compañero en **Reviewers**.
4. Si alguien te deja comentarios de corrección, haz los ajustes en tu misma rama, vuelve a hacer `git commit` y `git push` (el PR se actualizará solo).
5. Cuando el revisor le dé **Approve**, haz clic en **Merge pull request** y luego en **Delete branch**.
