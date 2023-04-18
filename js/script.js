let productos = [];
productos.push(new Producto("1", "Cafe colombiano 1k", "1500", "cafe", "4", "./img/cafecolombiano.webp", "Cafe colombiano de primera calidad. Presentación 1 kilo."));
productos.push(new Producto("2", "Cafe colombiano 1/2k", "800", "cafe", "2", "./img/cafecolombiano.webp", "Cafe colombiano de primera calidad. Presentación 1/2 kilo."));
productos.push(new Producto("3", "Cafe italiano 1k", "1600", "cafe", "2", "./img/cafeitaliano.webp", "Cafe italiano de primera calidad. Presentación 1 kilo."));
productos.push(new Producto("4", "Cafe italiano 1/2k", "900", "cafe", "3", "./img/cafeitaliano.webp", "Cafe italiano de primera calidad. Presentación 1/2 kilo."));
productos.push(new Producto("5", "Blend cafe 1k", "2000", "cafe", "1", "./img/cafeblend.webp", "El mas exquisito blend de cafe. Presentacion 1 kilo"));
productos.push(new Producto("6", "Blend cafe 1/2k", "1200", "cafe", "3", "./img/cafeblend.webp", "El mas exquisito blend de cafe. Presentacion 1/2 kilo"));
productos.push(new Producto("7", "Taza especial", "2500", "accesorios", "1", "./img/taza.webp", "Taza especial, la taza mas linda que vas a ver en tu vida, capacidad: 300ml."));
productos.push(new Producto("8", "Azucar en cubos", "500", "extras", "2", "./img/azucar.webp", "Cubos de azucar, presentacion ideal para usar la medida justa y ademas son re instagrameables! Presentacion de 1/2 kilo."));
productos.push(new Producto("9", "Cuchara fancy", "600", "accesorios", "2", "./img/cuchara.webp", "Ningun cafe esta completo sin esta cuchara."));
productos.push(new Producto("10", "Amarettis", "400", "extras", "3", "./img/amaretti.webp", "Mini galletitas de almendra, las mas ricas para acompañar tu cafe. Presentacion de 250gm."));


let buscarN = document.getElementById("buscarN");
buscarN.addEventListener("input", filtrarN);
let buscarC = document.getElementById("buscarC");
buscarC.addEventListener("input", filtrarC);


let contar = 0;
let contador = document.getElementById("contador");
cargarProd(productos);


function cargarProd(productos) {
    if (localStorage.getItem("contar")) {
        contar = localStorage.getItem("contar");
        contador.innerHTML = contar;
    }
    let contenedor = document.getElementById("contenedorProds");
    contenedor.innerHTML = "";
    productos.forEach(producto => {
        let carProd = document.createElement("div");
        carProd.className = "cardProd card col-lg-3 col-md-6 col-12";


        carProd.innerHTML = `
        <div class="card-body">
        <h3 class="card-title">${producto.nombre}</h3>
        <img src=${producto.img} class="card-img-top">
        <p>${producto.categoria}</p>
        <p class="card-text">${producto.desc}</p>
        <h4>Precio: $${producto.precio}</h4>
        <button id=${producto.id}>Agregar al carrito</button>
        </div>
    `

        contenedor.appendChild(carProd);
        let btnAgregar = document.getElementById(producto.id);
        btnAgregar.addEventListener("click", agregar);
    })
    
}

function filtrarN() {
    let aFiltrado = productos.filter(producto => producto.nombre.toLowerCase().includes(buscarN.value.toLowerCase()));
    cargarProd(aFiltrado);
}

function filtrarC() {
    let aFiltrado = productos.filter(producto => producto.categoria.toLowerCase().includes(buscarC.value.toLowerCase()));
    cargarProd(aFiltrado);
}


function agregar(e) {
    let buscado = productos.find(producto => producto.id === Number(e.target.id));
    if (carrito.some(producto => producto.id == buscado.id)) {
        let pos = carrito.findIndex(producto => producto.id == buscado.id);
        carrito[pos].cant = parseInt(carrito[pos].cant) + 1;
        carrito[pos].subtotal = parseFloat(carrito[pos].precio) * parseInt(carrito[pos].cant);
        alert("Agregaste otra unidad!");
    } else {
        carrito.push({
            id: buscado.id,
            nombre: buscado.nombre,
            precio: buscado.precio,
            cant: 1,
            subtotal: buscado.precio
        }
        );
        alert("agregado al carrito!");
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    contar++;
    contador.innerHTML = contar;
    localStorage.setItem("contar", contar);
}


let carrito = [];
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    cargarCarrito(carrito);
}


