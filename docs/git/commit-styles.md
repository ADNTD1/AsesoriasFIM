## Mensajes de Confirmación (Commits) en Git

> Guía para redactar mensajes de confirmación en Git.

### Visión General

Los commits deben estar bien documentados para reflejar claramente cómo afectan tanto a los usuarios como a los colaboradores del proyecto. Para esto, seguimos la especificación de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), la cual define un formato estructurado para los mensajes de confirmación, facilitando así su comprensión y seguimiento.

### Estructura del Mensaje de Commit

Un mensaje de commit se compone de tres partes:

```
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie de mensaje opcional]
```

#### 1. **Tipo** (Obligatorio)

El `tipo` indica el propósito del cambio y debe ser uno de los siguientes:

- **feat**: Se agrega una nueva funcionalidad
- **fix**: Corrección de un error o bug
- **docs**: Cambios en la documentación
- **style**: Cambios de formato o estilo que no afectan el comportamiento del código (espacios, indentación, etc.)
- **refactor**: Reestructuración del código sin alterar su funcionalidad
- **perf**: Mejoras de rendimiento
- **test**: Adición o modificación de pruebas
- **chore**: Tareas de mantenimiento (configuraciones, dependencias, scripts, etc.)
- **ci**: Cambios relacionados con integración o entrega continua (CI/CD)

#### 2. **Alcance** (Opcional)

El `alcance` especifica la parte del proyecto que se está modificando. Ejemplos:

```
feat(auth): agregar autenticación basada en JWT
fix(ui): corregir problema de alineación en el botón
```

#### 3. **Descripción** (Obligatoria)

Una breve frase que describa el cambio realizado, redactada en infinitivo (por ejemplo: "agregar validación", "corregir error"). Ejemplos:

```
fix(database): evitar error de restricción nula en la tabla de usuarios
refactor(server): modularizar los controladores de rutas API
```

#### 4. **Cuerpo** (Opcional)

Una explicación más detallada del cambio realizado. Es útil para cambios complejos o que requieran contexto adicional.

```
feat(api): implementar endpoint REST para procesamiento de pagos

Se agregó un nuevo endpoint POST /payments para procesar transacciones de forma segura. Incluye validaciones y manejo de errores.
```

#### 5. **Pie de mensaje** (Opcional)

- Usa `BREAKING CHANGE:` para señalar cambios que rompen la compatibilidad con versiones anteriores.
- Puedes referenciar issues o tickets relacionados, por ejemplo: `Closes #123`.

Ejemplo:

```
BREAKING CHANGE: se actualizó el esquema de la base de datos, se requiere una migración
```

---

### Ejemplos

#### Commit Simple

```
fix(auth): corregir problema con la expiración del token JWT
```

#### Commit con Cuerpo

```
feat(payments): agregar integración con Stripe

Se implementó soporte para la API de Stripe para procesar pagos con tarjeta de crédito. Se añadieron pruebas y manejo de errores para transacciones fallidas.
```

#### Commit con Cambio Rompedor

```
refactor(database): migrar a PostgreSQL

Se actualizó el motor de base de datos a PostgreSQL para mejorar la escalabilidad.

BREAKING CHANGE: Se requiere migración de base de datos desde MySQL a PostgreSQL.
```

---

### Recomendaciones Adicionales

- Redacta la descripción del commit en infinitivo (por ejemplo, "agregar validación", "actualizar estilos").
- Sé claro y conciso, pero asegúrate de incluir información relevante.
- Usa minúsculas en los tipos y alcances.
- Cuando sea posible, vincula el commit a un issue o pull request relacionado.

Seguir esta convención ayuda a mantener un historial de commits limpio, coherente y fácil de entender, lo cual facilita la colaboración en equipo.
