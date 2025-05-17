# horoscopo-vanillajs-Jh
# Aplicación de Consulta de Horóscopo

Esta es una aplicación web desarrollada con JavaScript vanilla siguiendo la arquitectura MVC para consultar el horóscopo diario a partir de una fecha de nacimiento.

## Características

- Validación de formato de fecha (DD-MM-AAAA)
- Obtención del signo zodiacal según la fecha de nacimiento
- Generación de horóscopo aleatorio con emoji correspondiente
- Visualización del horóscopo durante 15 segundos con animación fade-out
- Interfaz responsive y amigable

## Arquitectura MVC

Esta aplicación sigue la arquitectura Modelo-Vista-Controlador (MVC) implementada como una aplicación de una sola página (SPA):

### Modelo (Model)
- Contiene toda la lógica de negocio
- Maneja la validación de fechas
- Determina el signo zodiacal
- Genera horóscopos personalizados

### Vista (View)
- Maneja la interacción con el DOM
- Muestra/oculta elementos de la interfaz
- Controla las animaciones y temporizadores

### Controlador (Controller)
- Conecta el modelo con la vista
- Gestiona el flujo de la aplicación
- Maneja los eventos del usuario

## Instalación y Ejecución Local

1. Clona este repositorio:
```
git clone [URL_DEL_REPOSITORIO]
```

2. Abre el archivo `index.html` en tu navegador web.

## Estructura de Archivos

La aplicación está implementada como una solución de archivo único:

```
/
|- index.html          # Aplicación completa con HTML, CSS y JavaScript
|- vercel.json         # Configuración para despliegue en Vercel
|- README.md           # Documentación
```

3. VERCEL
https://horoscopo-vanillajs-jh.vercel.app/

## Historia de Usuario Implementada

**Historia de Usuario: Consulta de Horóscopo Web**
- Como usuario de la aplicación web, quiero ingresar mi fecha de nacimiento y pulsar "Consultar" para recibir mi horóscopo diario en pantalla.

## Criterios de Aceptación Cumplidos

- **AC1**: Validación de formato de fecha (DD-MM-AAAA)
- **AC2**: Botón "Consultar" habilitado solo cuando la fecha es válida
- **AC3**: Consulta y despliegue del horóscopo con emoji
- **AC4**: Duración en pantalla (15 segundos) y deshabilitación del botón
- **AC5**: Fade-out suave y reactivación del botón

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Arquitectura MVC