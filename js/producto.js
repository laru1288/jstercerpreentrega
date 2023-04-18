class Producto {
    constructor (id, nombre, precio, categoria, stock, img, desc) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.stock = parseInt(stock);
        this.img = img;
        this.desc = desc;
    }

}