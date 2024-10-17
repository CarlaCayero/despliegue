/**
 *Representa un producto en una tienda.
 *
 * @class Producto
 */
class Producto {
    /**
     * Crea una instancia de Producto.
     * @param {*} nombre - El nombre del producto.
     * @param {*} precio - El precio unitario del producto.
     * @param {*} cantidad - La cantidad disponible del producto.
     * @memberof Producto
     */
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  /**
   *Calcula el total basado en el precio y la cantidad.
   *
   * @return {number}  El total del valor de los productos (precio * cantidad).
   * @memberof Producto
   */
  calcularTotal() {
      return this.precio * this.cantidad;
    }
  }
  
  class Carrito {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    calcularTotalCarrito() {
      return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
    }
  
    vaciarCarrito() {
      this.productos = [];
    }
  }
  
  class Usuario {
    constructor(nombre, correo) {
      this.nombre = nombre;
      this.correo = correo;
      this.carrito = new Carrito();
    }
  
    agregarProductoAlCarrito(producto) {
      this.carrito.agregarProducto(producto);
    }
  
    finalizarCompra() {
      const total = this.carrito.calcularTotalCarrito();
      console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
      this.carrito.vaciarCarrito();
    }
  }
  
  
  const producto1 = new Producto("Laptop", 1200, 1);
  const producto2 = new Producto("Mouse", 20, 2);
  
  const usuario = new Usuario("Juan", "juan@example.com");
  
  usuario.agregarProductoAlCarrito(producto1);
  usuario.agregarProductoAlCarrito(producto2);
  
  usuario.finalizarCompra();