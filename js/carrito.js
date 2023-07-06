const abrirCarrito = document.getElementById("carrito");
const modalCarrito = document.getElementById("carrito-modal");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function mostrarCarrito(){
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
        `;

        let counter = document.createElement("div");
        counter.className = "contadorProductos";
        let restar = document.createElement("button");
        restar.className = "fas fa-minus";
        let cant = document.createElement("span");
        cant.textContent = product.cantidad;
        let sumar = document.createElement("button");
        sumar.className =  "fas fa-plus";

        
        counter.append(restar);
        counter.append(cant);
        counter.append(sumar);
        
        let precioP = document.createElement("p");
        precioP.textContent = "$"+product.precioAcum;

        restar.addEventListener("click", () => {
            let cantid = parseInt(cant.textContent);
            if (cantid > 1) {
              cant.textContent = cantid - 1;
              product.cantidad = cantid - 1; // Actualizar la cantidad en el objeto product
              product.precioAcum = product.precio * product.cantidad; // Actualizar el precio acumulado
              precioP.textContent = "$" + product.precioAcum;
              actualizarTotal(); // Recalcular la suma total
            }
          });
      
        sumar.addEventListener("click", () => {
            cant.textContent = parseInt(cant.textContent) + 1;
            product.cantidad = parseInt(cant.textContent); // Actualizar la cantidad en el objeto product
            product.precioAcum = product.precio * product.cantidad; // Actualizar el precio acumulado
            precioP.textContent = "$" + product.precioAcum;
            actualizarTotal(); // Recalcular la suma total
          });
        
        producto.append(counter);
        let eliminar = document.createElement("button");
        eliminar.className = "fas fa-trash-alt borrarProducto";
        eliminar.addEventListener("click", () =>{eliminarProducto(product.id)});

        producto.append(precioP);
        producto.append(eliminar);
        containerProductos.append(producto);
        

    });

    let footerCarrito = document.getElementById("footer-carrito");
    footerCarrito.innerHTML = "";
    let suma = carrito.reduce((acc, p) => acc + p.precioAcum, 0);

    let totalPagar = document.createElement("div");
    totalPagar.className = "totalPagar-carrito";
    if (suma > 0){
        totalPagar.innerHTML = `<h3>Total a pagar: $${suma}</h3>`;
        let botonPagar = document.createElement("button");
        botonPagar.className = "botonPagar";
        botonPagar.textContent = "Pagar";
        botonPagar.addEventListener("click", () => {
        window.location.href = "../html/pagar.html";
        });
        totalPagar.append(botonPagar);
        //agregar funcion a botonPagar despues
    } else {
        totalPagar.innerHTML = "No hay elementos en el carrito";
    }
    
    footerCarrito.append(totalPagar);
}

function mostrarModalCarrito(){
    modalCarrito.showModal();
    mostrarCarrito();
}

abrirCarrito.addEventListener("click", mostrarModalCarrito);

(document.getElementById("salirCarrito")).addEventListener("click", cerrarCarrito);

(document.getElementById("vaciarCarrito")).addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    carrito = []; // Vaciar el carrito asignando un array vacío
    saveLocal(); // Guardar el carrito vacío en el almacenamiento local
    mostrarCarrito(); // Actualizar la interfaz mostrando el carrito vacío
    actualizarContador();
}

function cerrarCarrito(){
    modalCarrito.style.display = "none";
    modalCarrito.close();
}

function eliminarProducto(id) {

    carrito = carrito.filter((carritoId) => {
        return carritoId.id !== id;
    })

    saveLocal();
    mostrarCarrito();
    actualizarContador();
};


function saveLocal() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function getPrecioTotal(){
    return carrito.reduce((acc, p) => acc + p.precioAcum, 0);
}

function actualizarTotal() {
    let suma = getPrecioTotal();
    let totalPagar = document.querySelector(".totalPagar-carrito h3");
    totalPagar.textContent = `Total a pagar: $${suma}`;
  }

  function actualizarContador(){
    let counter = document.getElementById("contador-productos");
    counter.innerText = carrito.length;
  }

  actualizarContador();
  

  
  


