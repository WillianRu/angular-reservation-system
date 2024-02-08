# Sistema de Reserva de Asientos para Películas

## Descripción

Este proyecto es un sistema de reserva de asientos para películas, diseñado para funcionar similar a un cine. Aunque los datos no están declarados de manera muy específica, el sistema soporta las operaciones CRUD (Crear, Leer, Actualizar, Borrar) completas.

El sistema está organizado en varias vistas, separadas por módulos, incluyendo uno para autenticación y otro para la navegación principal. Además, utiliza un módulo de componentes compartidos para facilitar el desarrollo y mantenimiento del código.

## Funcionalidades Actuales

- **Interacción entre módulos:** Capacidad para navegar y utilizar funcionalidades entre los distintos módulos del sistema.
- **Componentes estáticos:** Inclusión de componentes quemados (hard-coded) dentro del sistema, permitiendo visualizar algunos datos basados en directivas.
- **Seguridad con JWT:** Implementación de seguridad mediante JSON Web Tokens (JWT), permitiendo la autenticación en la aplicación y el almacenamiento local del token para futuras transacciones.

## Funcionalidades Planeadas

- **Registro de usuarios:** Permitirá a los nuevos usuarios crear una cuenta en el sistema.
- **CRUD de reservaciones:** Implementación completa de las operaciones CRUD para las reservaciones de asientos.
- **Vistas de reservaciones:** Creación de vistas específicas para la gestión y visualización de reservaciones.

## Tema Favorito del Último Sprint: Guardianes

Un aspecto destacado del último sprint fue la implementación de guardianes. Los guardianes son una herramienta eficaz para proteger las vistas del usuario, asegurando que solo los usuarios autenticados y autorizados puedan acceder a ciertas partes de la aplicación. Esta funcionalidad no solo mejora la seguridad del sistema sino que también añade una capa adicional de interactividad y control sobre el flujo de navegación del usuario.
