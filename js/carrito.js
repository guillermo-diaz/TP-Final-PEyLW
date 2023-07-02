const abrirCarrito = document.getElementById("carrito");
const  modalCarrito = document.getElementById("carrito-modal");
let carrito = [];

function abrirCarrito(){
    
}


abrirCarrito.addEventListener("click", () => {
    modalCarrito.showModal();
    modalCarrito.style.display = "flex";
    modalCarrito.style.flexDirection = "column";
    
    let containerProductos = document.getElementById("productos-carrito");
    containerProductos.innerHTML = "";

    
    carrito.forEach((product) => {
        let producto = document.createElement("div");
        producto.className = "card-producto";
        producto.innerHTML = `
            <img src ="${product.img}">
            <h3>${product.nombre}</h3>
            <p>$${product.precio}</p>
        `;
        let eliminar = document.createElement("button");
        eliminar.className = "fas fa-trash-alt borrarProducto";

        producto.append(eliminar);
        containerProductos.append(producto);
    });

    let footerCarrito = (document.getElementById("footer-carrito"));
    footerCarrito.innerHTML = "";
    let suma = carrito.reduce((acc, p) => acc + p.precio, 0);

    let totalPagar = document.createElement("div");
    totalPagar.className = "totalPagar-carrito";
    if (suma > 0){
        totalPagar.innerHTML = `<h3>Total a pagar: $${suma}</h3>`;
        let botonPagar = document.createElement("button");
        botonPagar.className = "botonPagar";
        botonPagar.textContent = "Pagar";
        totalPagar.append(botonPagar);
        //agregar funcion a botonPagar despues
    } else {
        totalPagar.innerHTML = "No hay elementos en el carrito";
    }
    
    footerCarrito.append(totalPagar);

   
    
});

(document.getElementById("salirCarrito")).addEventListener("click", () => {

    modalCarrito.style.display = "none";
    modalCarrito.close();
});

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })
}