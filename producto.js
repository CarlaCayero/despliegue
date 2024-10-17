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
    /**
     * Creates an instance of Usuario.
     * @param {*} nombre  - El nombre del usuario.
     * @param {*} correo - El correo electrónico del usuario.
     * @memberof Usuario
     * Crea una instancia de Usuario.
     */
    constructor(nombre, correo) {
      this.nombre = nombre;
      this.correo = correo;
      this.carrito = new Carrito();
    }
  /**
   * Agrega un producto al carrito de compras del usuario.
   * 
   * Este método utiliza la instancia de Carrito para añadir un producto al 
   * carrito del usuario.
   * 
   * @param {*} producto - El producto que se desea agregar al carrito.
   * @memberof Usuario
   */
  agregarProductoAlCarrito(producto) {
      this.carrito.agregarProducto(producto);
    }
  /**
   * Finaliza la compra del usuario.
   * 
   * Este método calcula el total de los productos en el carrito, imprime un mensaje 
   * con el total de la compra, y vacía el carrito después de la compra.
   * 
   * @memberof Usuario
   */
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