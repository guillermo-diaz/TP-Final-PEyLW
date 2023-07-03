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
            let cantid = parseInt(cant.textContent)
            if (cantid > 1) {
              cant.textContent = cantid - 1;
              precioP.textContent = "$" + product.precio * parseInt(cant.textContent);
            }
        });
      
        sumar.addEventListener("click", () => {
            cant.textContent = parseInt(cant.textContent) + 1;
            precioP.textContent = "$" + product.precio * parseInt(cant.textContent);
          });
       
        
        producto.append(counter);
        let eliminar = document.createElement("button");
        eliminar.className = "fas fa-trash-alt borrarProducto";

        producto.append(precioP);
        producto.append(eliminar);
        containerProductos.append(producto);
        
        eliminar.addEventListener("click", eliminarProducto);

    });

    let footerCarrito = document.getElementById("footer-carrito");
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
}


abrirCarrito.addEventListener("click", () => {
    modalCarrito.showModal();
    mostrarCarrito();
});

(document.getElementById("salirCarrito")).addEventListener("click", cerrarCarrito);

function cerrarCarrito(){
    modalCarrito.style.display = "none";
    modalCarrito.close();
}

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })

    saveLocal();
    mostrarCarrito();
};


function saveLocal() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

