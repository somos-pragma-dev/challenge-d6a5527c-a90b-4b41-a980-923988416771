# Implementación de Formularios Dinámicos con Validación Custom

En el contexto de una aplicación de gestión de cuentas bancarias, necesitas implementar un formulario dinámico que capture información de los clientes. El formulario debe validar los datos ingresados según reglas específicas del dominio. Los campos requeridos incluyen nombre, número de cuenta, saldo inicial y tipo de cuenta (ahorros o corriente). El sistema debe rechazar cuentas con saldo inicial negativo y asegurar que el número de cuenta tenga un formato válido (10 dígitos). Además, el tipo de cuenta debe ser seleccionado de una lista predefinida.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React Hooks |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 2 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del Formulario

**Objetivo:** Configurar un formulario básico con React Hooks que capture los campos requeridos.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Crea un formulario con los campos: nombre, número de cuenta, saldo inicial y tipo de cuenta.
- Utiliza React Hooks para manejar el estado del formulario.

**Entregable:** Formulario básico con React Hooks que capture los campos requeridos.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo React Hooks pueden simplificar la gestión del estado en componentes funcionales.
- Considera la mejor forma de estructurar el estado del formulario para facilitar la validación.

</details>

### Fase 2: Implementación de Validación Custom

**Objetivo:** Implementar validaciones custom para los campos del formulario.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Agrega validaciones para asegurar que el saldo inicial no sea negativo.
- Valida que el número de cuenta tenga exactamente 10 dígitos.
- Asegura que el tipo de cuenta sea seleccionado de una lista predefinida.

**Entregable:** Formulario con validaciones custom implementadas.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo puedes integrar las validaciones en el ciclo de vida del formulario.
- Considera la mejor forma de mostrar mensajes de error al usuario.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son React Hooks y cómo se utilizan en un componente de React?
- **paraQueSirve**: ¿Para qué sirve la validación custom en un formulario y cómo se implementa en React?
- **comoSeUsa**: ¿Cómo se integran las validaciones custom en un formulario con React Hooks?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validaciones en un formulario con React Hooks?

## Criterios de Evaluacion

- Implementación correcta de un formulario con React Hooks.
- Validación custom para asegurar que el saldo inicial no sea negativo.
- Validación del formato del número de cuenta (10 dígitos).
- Selección del tipo de cuenta de una lista predefinida.
- Manejo efectivo de mensajes de error en el formulario.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
