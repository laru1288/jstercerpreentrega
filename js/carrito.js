class Carrito {
    constructor (id, nombre, precio, cant, subTotal) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cant = parseInt(cant);
        this.suTotal = parseFloat(subTotal);
    }

}