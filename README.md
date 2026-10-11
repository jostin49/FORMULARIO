# Proyecto: Formulario Web con HTML5, CSS y JavaScript

Este proyecto corresponde a una práctica colaborativa dividida en 3 sesiones de trabajo para la construcción y validación de un formulario web accesible, responsivo y dinámico.

---

## 📁 Estructura del Proyecto

```text
FORMULARIO/
├── index.html       # Sesión 1: Estructura HTML5 y campos del formulario
├── style.css        # Sesión 2: Diseño visual, Flexbox, CSS Grid y Responsive
├── script.js        # Sesión 3: Manipulación del DOM, eventos y validaciones
├── .gitignore       # Archivos ignorados por Git
└── README.md        # Documentación del proyecto y guía de trabajo
```

---

## 👥 Distribución de Sesiones y Commits para el Equipo

Para que en el historial de Git quede registrado el aporte individual de cada integrante, cada compañero debe realizar su respectivo commit:

### 1️⃣ Sesión 1 – HTML5 (Integrante 1)
- **Archivo:** `index.html`
- **Tareas:**
  - Crear estructura semántica del formulario (`<form>`, `<label>`, `<input>`, `<select>`, `<button>`).
  - Mínimo 5 campos diferentes con atributos (`required`, `placeholder`, `min`, `max`, `pattern`).
- **Comando Git sugerido:**
  ```bash
  git add index.html
  git commit -m "feat(sesion-1): crear estructura HTML5 y formulario de registro"
  git push origin main
  ```

---

### 2️⃣ Sesión 2 – CSS (Integrante 2)
- **Archivo:** `style.css`
- **Tareas:**
  - Vincular hoja de estilos y definir variables de color y tipografía.
  - Maquetar con **CSS Grid** (columnas) y **Flexbox** (centrado y alineación).
  - Implementar diseño adaptable (Responsive Design con `@media`).
  - Estilos para estados de validación (éxito y error).
- **Comando Git sugerido:**
  ```bash
  git add style.css
  git commit -m "feat(sesion-2): aplicar diseño responsivo, CSS Grid y estilos del formulario"
  git push origin main
  ```

---

### 3️⃣ Sesión 3 – JavaScript y Validaciones (Integrante 3)
- **Archivo:** `script.js`
- **Tareas:**
  - Capturar elementos del DOM y vincular `script.js`.
  - Escuchar eventos `input`, `blur` y `submit`.
  - Validaciones de campos obligatorios, correo (regex), contraseña segura (mínimo 8 caracteres con letras y números), edad, teléfono y select.
  - Mostrar mensajes de error dinámicos y prevenir el envío con `e.preventDefault()`.
- **Comando Git sugerido:**
  ```bash
  git add script.js
  git commit -m "feat(sesion-3): implementar validaciones del DOM, eventos input/blur/submit y feedback visual"
  git push origin main
  ```
