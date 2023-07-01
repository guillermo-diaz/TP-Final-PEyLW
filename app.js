const seccionProductos = document.getElementById("seccion-productos");
const productos = [
    {
        id: 1,
        nombre: "Black Sabbath",
        artista: "Black Sabbath",
        anio: "1970",
        precio: 3000, 
        img: "https://lastfm.freetls.fastly.net/i/u/770x0/d3878642754ca3f95235f09e2cb7c52d.webp#d3878642754ca3f95235f09e2cb7c52d"
    },
    {
        id: 2,
        nombre: "Paranoid",
        artista: "Black Sabbath",
        anio: "1970",
        precio: 2000,
        img: "https://lastfm.freetls.fastly.net/i/u/770x0/98d2c11ebe68cfd522397b5bf4ec6f05.webp#98d2c11ebe68cfd522397b5bf4ec6f05"
    },
    {
        id: 3,
        nombre: "The Eminem Show",
        artista: "Eminem",
        anio: "2002",
        precio: 5000,
        img: "https://i.discogs.com/QNDHhc5uZ_c3IhiRq-NTYXS2jSk_r_6UgDN4ZAEOkFA/rs:fit/g:sm/q:90/h:585/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU3MTMz/MS0xMTY5NTMxNDg4/LmpwZWc.jpeg"
    }
];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";

    content.innerHTML = `
    <img src= "${product.img}" alt="${product.nombre}">
    
    <div class="infoProducto">
      <h3>${product.nombre}</h3>
      <p class="price"> $${product.precio} </p>
      <button class="comprar">COMPRAR</button>
    </div>`;
    seccionProductos.append(content);

});



