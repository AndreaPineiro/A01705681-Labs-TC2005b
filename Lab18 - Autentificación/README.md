# Laboratorio 18

Entender cómo funciona la autentificación de usuarios. Desarrollar aplicaciones web con autentificación de usuarios. Desarrollar aplicaciones web con rutas protegidas. Desarrollar aplicaciones web protegidas contra ataques CSRF.

Para este laboratorio, se creo las funcionalidades para que el usuario se autentifiqué y se protegieron las rutas.

Use las páginas que había creado antes con la información sobre mi, sobre html, css y js. Estos se encuentran dentro de un archivo de rutas "about.js"

En la página productos/agregar se encuentra un campo que te pide nombre, imagen y precio del producto; y los productos que se han ingresado se muestran en /productos.

Se usa una Cookie para guardar el nombre del último productos. Y usé sesiones para crear una página de login; solamente cuando el usuario se loggea puede acceder a las paginas de productos.

## Rutas:
PRINCIPAL: 
- HOME: "/"

PRODUCTOS:
- CONSULTAR PRODUCTOS: "/productos"
- AGREGAR PRODUCTO: "/productos/agregar"
- CONSULTAR SOLO UN PRODUCTO "/productos/#"

ABOUT:
- SOBRE MÍ: "/about"
- SOBRE HTML: "/about/html"
- SOBRE CSS: "/about/css"
- SOBRE JS: "/about/js"

USERS 
- LOGIN: "/users/login"
- REGISTER: "/users/register"
