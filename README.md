# despliegue
Proyecto: Carrito de Compras
Este proyecto simula un sencillo sistema de carrito de compras en JavaScript. Incluye tres clases principales: Producto, Carrito y Usuario. Permite a un usuario agregar productos a un carrito y finalizar la compra, calculando el total.

Descripción
El sistema contiene tres entidades principales:

Producto: Representa un producto en una tienda con un nombre, precio y cantidad.
Carrito: Representa el carrito de compras del usuario, que puede contener varios productos y calcular el total.
Usuario: Representa un usuario que tiene un carrito de compras y puede agregar productos al carrito y realizar la compra.
Clases
1. Producto
La clase Producto tiene las siguientes propiedades:

nombre (string): El nombre del producto.
precio (number): El precio unitario del producto.
cantidad (number): La cantidad del producto en stock.
Método:

calcularTotal(): Calcula el total del valor del producto multiplicando el precio por la cantidad.
2. Carrito
La clase Carrito representa el carrito de compras y contiene un array de productos.

Métodos:

agregarProducto(producto): Agrega un producto al carrito.
calcularTotalCarrito(): Calcula el total de todos los productos en el carrito.
vaciarCarrito(): Vacía el carrito eliminando todos los productos.
3. Usuario
La clase Usuario tiene las siguientes propiedades:

nombre (string): El nombre del usuario.
correo (string): El correo electrónico del usuario.
carrito (Carrito): Un carrito de compras asociado al usuario.
Métodos:

agregarProductoAlCarrito(producto): Agrega un producto al carrito de compras del usuario.
finalizarCompra(): Calcula el total del carrito, imprime un mensaje con el total de la compra, y vacía el carrito.
Uso
A continuación, se muestra un ejemplo de uso del sistema:

javascript
Copiar código
// Crear productos
const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

// Crear un usuario
const usuario = new Usuario("Juan", "juan@example.com");

// Agregar productos al carrito del usuario
usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

// Finalizar la compra
usuario.finalizarCompra();
Salida esperada:

yaml
Copiar código
Usuario Juan ha realizado una compra por un total de 1240€
Requisitos
Este proyecto está implementado en JavaScript. No se necesitan dependencias externas.

Estructura del Código
Producto: Representa un producto con nombre, precio y cantidad.
Carrito: Maneja los productos del usuario y calcula el total.
Usuario: Administra el carrito de compras y finaliza las compras.
Licencia
Este proyecto está bajo la licencia MIT.
