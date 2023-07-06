function detalleProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get("product");
    const product = JSON.parse(decodeURIComponent(productParam));
  
    let img = document.createElement("img");
    img.src = product.img;
    let contenedorImg = document.getElementById("img-product");
  
    contenedorImg.append(img);

    let contenedorDatos = document.getElementById("datos-product")
    let nombre = document.createElement("h2");
    nombre.textContent = product.nombre; 

    let precio = document.createElement("span");
    precio.className = "precio-product";
    precio.textContent = "$"+product.precio;
    let envios = document.createElement("div");
    envios.className = "envios-pais"
    let icono = document.createElement("i");
    icono.className = "fas fa-truck";
    envios.append(icono);
    let text = document.createElement("p");
    text.textContent = "Envios a todo el pais";
    envios.append(text);


    contenedorDatos.append(nombre);
    contenedorDatos.append(precio);
    contenedorDatos.append(envios);

    let botonCompra = document.createElement("button");
    botonCompra.textContent = "Comprar";
    botonCompra.className = "detalle-comprar";
    botonCompra.addEventListener("click", () => {
        const foundProduct = carrito.find((element) => element.id === product.id);
    
        if (foundProduct) {
            foundProduct.cantidad++;
            foundProduct.precioAcum = foundProduct.precioAcum + product.precio;
        } else {
            carrito.push({
                id: product.id, 
                img: product.img,
                nombre: product.nombre, 
                precio: product.precio,
                cantidad: 1,
                precioAcum: product.precio
            });
            actualizarContador();
        }
        saveLocal();
    });

    contenedorDatos.append(botonCompra);

    let contenedorInfo = document.getElementById("informacion-producto");
    let info = document.createElement("p");
    let infoTitle = document.createElement("h2");
    infoTitle.textContent = "Información:";
    info.textContent = product.info;

    contenedorInfo.append(infoTitle);
    contenedorInfo.append(info);
  }
  
 
  detalleProducto();
