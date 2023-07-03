const productos = [
    {
        id: 1,
        tipo: "album",
        nombre: "Black Sabbath",
        artista: "Black Sabbath",
        info: "Black Sabbath es el álbum debut de la banda británica de heavy metal Black Sabbath. Fue publicado el 13 de febrero de 1970. Se considera el primer álbum en la historia del metal y punto de partida para la creación de dicho género musical. Llegó a los top ten británicos, donde permaneció por tres meses",
        anio: "1970",
        precio: 3000, 
        img: "https://lastfm.freetls.fastly.net/i/u/770x0/d3878642754ca3f95235f09e2cb7c52d.webp#d3878642754ca3f95235f09e2cb7c52d"
    },
    {
        id: 2,
        tipo: "album",
        nombre: "Paranoid",
        artista: "Black Sabbath",
        info: "Paranoid es el segundo álbum de la banda británica de heavy metal Black Sabbath. Originariamente su nombre iba a ser War Pigs, pero debido a presiones de la discográfica se cambió el nombre a Paranoid. Fue grabado y publicado en el año 1970, constituyendo el primer éxito de la banda, y hasta nuestros días es considerado un disco de culto.",
        anio: "1970",
        precio: 2000,
        img: "https://lastfm.freetls.fastly.net/i/u/770x0/98d2c11ebe68cfd522397b5bf4ec6f05.webp#98d2c11ebe68cfd522397b5bf4ec6f05"
    },
    {
        id: 3,
        tipo: "album",
        nombre: "The Eminem Show",
        artista: "Eminem",
        info: "The Eminem Show es el cuarto álbum de estudio del cantante estadounidense Eminem, el tercero tras firmar por Aftermath, lanzado en 2002. Fue el álbum musical más vendido ese año en todo el mundo con 22 millones de copias, el primer sencillo, y el más exitoso, fue Without Me.",
        anio: "2002",
        precio: 5000,
        img: "https://i.discogs.com/QNDHhc5uZ_c3IhiRq-NTYXS2jSk_r_6UgDN4ZAEOkFA/rs:fit/g:sm/q:90/h:585/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU3MTMz/MS0xMTY5NTMxNDg4/LmpwZWc.jpeg"
    }
];
const seccionProductos = document.getElementById("seccion-productos");

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    let divInfoProducto = document.createElement("div");
    divInfoProducto.className = "infoProducto";
    let h3 = document.createElement("h3");
    h3.textContent = product.nombre;
    let pPrice = document.createElement("p");
    pPrice.className = "price";
    pPrice.textContent = "$"+product.precio;
    let comprar = document.createElement("button");
    comprar.className = "comprar";
    comprar.textContent = "COMPRAR";
    let imagen = document.createElement("img");
    imagen.src = product.img;
    imagen.alt = product.nombre;    

    divInfoProducto.append(h3);
    divInfoProducto.append(pPrice);
    divInfoProducto.append(comprar);

    content.append(imagen);
    content.append(divInfoProducto);
    seccionProductos.append(content);


    comprar.addEventListener("click", () => {
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
    

});