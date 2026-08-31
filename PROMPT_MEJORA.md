# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: src/components/AccountForm.tsx ===
import React, { FC, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { accountValidator } from '../validators/accountValidator';
import { errorMessages } from '../utils/errorMessages';

interface AccountFormProps {
  onSubmit: (data: any) => void;
}

const AccountForm: FC<AccountFormProps> = ({ onSubmit }) => {
  const [formState, handleInputChange, handleSubmit] = useForm({
    name: '',
    accountNumber: '',
    initialBalance: '',
    accountType: 'savings'
  }, onSubmit, accountValidator);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="name" value={formState.name} onChange={handleInputChange} />
        {formState.errors.name && <span>{formState.errors.name}</span>}
      </div>
      <div>
        <label>Número de cuenta:</label>
        <input type="text" name="accountNumber" value={formState.accountNumber} onChange={handleInputChange} />
        {formState.errors.accountNumber && <span>{formState.errors.accountNumber}</span>}
      </div>
      <div>
        <label>Saldo inicial:</label>
        <input type="text" name="initialBalance" value={formState.initialBalance} onChange={handleInputChange} />
        {formState.errors.initialBalance && <span>{formState.errors.initialBalance}</span>}
      </div>
      <div>
        <label>Tipo de cuenta:</label>
        <select name="accountType" value={formState.accountType} onChange={handleInputChange}>
          <option value="savings">Ahorros</option>
          <option value="checking">Corriente</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AccountForm;

// === ARCHIVO: src/hooks/useForm.ts ===
import { useState, useCallback } from 'react';

export const useForm = (initialValues: any, onSubmit: (data: any) => void, validator: any) => {
  const [formState, setFormState] = useState({...initialValues, errors: {} });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState({...formState, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errors = validator(formState);
    if (Object.keys(errors).length === 0) {
      onSubmit(formState);
    } else {
      setFormState({...formState, errors });
    }
  };

  return [formState, handleInputChange, handleSubmit];
};

// === ARCHIVO: src/validators/accountValidator.ts ===
export const accountValidator = (formState: any) => {
  const errors: any = {};
  if (formState.initialBalance < 0) {
    errors.initialBalance = 'El saldo inicial no puede ser negativo';
  }
  if (!/^\d{10}$/.test(formState.accountNumber)) {
    errors.accountNumber = 'El número de cuenta debe tener 10 dígitos';
  }
  if (!['savings', 'checking'].includes(formState.accountType)) {
    errors.accountType = 'Seleccione un tipo de cuenta válido';
  }
  return errors;
};

// === ARCHIVO: src/utils/errorMessages.ts ===
export const errorMessages = {
  required: 'Este campo es requerido',
  invalid: 'Valor inválido'
};

// === ARCHIVO: src/services/accountService.ts ===
export const accountService = {
  createAccount: (data: any) => {
    console.log('Account created:', data);
  }
};

// === ARCHIVO: src/App.tsx ===
import React from 'react';
import AccountForm from './components/AccountForm';
import { accountService } from './services/accountService';

const App: React.FC = () => {
  const handleSubmit = (data: any) => {
    accountService.createAccount(data);
  };
  return (
    <div>
      <h1>Formulario de Cuenta Bancaria</h1>
      <AccountForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;

// === ARCHIVO: src/index.tsx ===
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

```
