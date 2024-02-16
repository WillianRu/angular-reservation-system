# Sistema de Reserva de Asientos para Películas

## Descripción

Este proyecto es un sistema de reserva de asientos para películas, diseñado para funcionar similar a un cine. Aunque los datos no están declarados de manera muy específica, el sistema soporta las operaciones CRUD (Crear, Leer, Actualizar, Borrar) completas.

El sistema está organizado en varias vistas, separadas por módulos, incluyendo uno para autenticación y otro para la navegación principal. Además, utiliza un módulo de componentes compartidos para facilitar el desarrollo y mantenimiento del código.

## Funcionalidades Actuales

- **Interacción entre módulos:** Capacidad para navegar y utilizar funcionalidades entre los distintos módulos del sistema.
- **Componentes estáticos:** Inclusión de componentes quemados (hard-coded) dentro del sistema, permitiendo visualizar algunos datos basados en directivas.
- **Seguridad con JWT:** Implementación de seguridad mediante JSON Web Tokens (JWT), permitiendo la autenticación en la aplicación y el almacenamiento local del token para futuras transacciones.
- **Interacción CRUD :** Implementación CRUD del sistema de reservas, es posible, crear, visualizar y borrar las reservas en el sistema.


## Tema Favorito del Último Sprint: Hooks y Pipes

Un aspecto destacado del último sprint fue la implementación de hooks. Con ellos fue posible manipular el ciclo de vida de los componente, cargar funciones al enviar formularios o incluso al cargar un componente nuevo, adicionalmente la integración de pipes facilito mucho la tipificación de los datos.
