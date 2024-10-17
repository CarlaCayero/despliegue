
class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  
    calcularTotal() {
      return this.precio * this.cantidad;
    }
  }
  /**
   *
   *
   * @class Carrito
   */
  class Carrito {
    constructor() {
      this.productos = []; // Inicializa el carrito como un array vacío.
    }
  /**
   *  Agrega un producto al carrito.
   *
   * @param {*} producto - El producto a agregar, que debe tener un método calcularTotal().
   * @memberof Carrito
   */
  agregarProducto(producto) {
      this.productos.push(producto);
    }
  /**
   * Calcula el total de todos los productos en el carrito.
   *
   * @return {*} - El total acumulado de los productos en el carrito.
   * @memberof Carrito
   */
  calcularTotalCarrito() {
      return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
    }
  /**
   * Vacía el carrito eliminando todos los productos.
   *
   * @memberof Carrito
   */
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