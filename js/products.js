const productos = [
    {
        id: "1",
        tipo: "album",
        nombre: "Black Sabbath",
        artista: "Black Sabbath",
        genero: ["Heavy Metal"],
        info: "Black Sabbath es el álbum debut de la banda británica de heavy metal Black Sabbath. Fue publicado el 13 de febrero de 1970. Se considera el primer álbum en la historia del metal y punto de partida para la creación de dicho género musical. Llegó a los top ten británicos, donde permaneció por tres meses",
        anio: "1970",
        precio: 3000, 
        img: "https://lastfm.freetls.fastly.net/i/u/770x0/d3878642754ca3f95235f09e2cb7c52d.webp#d3878642754ca3f95235f09e2cb7c52d"
    },
    {
        id: "2",
        tipo: "album",
        nombre: "Paranoid",
        artista: "Black Sabbath",
        genero: ["Heavy Metal"],
        info: "Paranoid es el segundo álbum de la banda británica de heavy metal Black Sabbath. Originariamente su nombre iba a ser War Pigs, pero debido a presiones de la discográfica se cambió el nombre a Paranoid. Fue grabado y publicado en el año 1970, constituyendo el primer éxito de la banda, y hasta nuestros días es considerado un disco de culto.",
        anio: "1970",
        precio: 2000,
        img: "https://lastfm.freetls.fastly.net/i/u/770x0/98d2c11ebe68cfd522397b5bf4ec6f05.webp#98d2c11ebe68cfd522397b5bf4ec6f05"
    },
    {
        id: "3",
        tipo: "album",
        nombre: "The Eminem Show",
        artista: "Eminem",
        genero: ["Rap", "Hip Hop"],
        info: "The Eminem Show es el cuarto álbum de estudio del cantante estadounidense Eminem, el tercero tras firmar por Aftermath, lanzado en 2002. Fue el álbum musical más vendido ese año en todo el mundo con 22 millones de copias, el primer sencillo, y el más exitoso, fue Without Me.",
        anio: "2002",
        precio: 5000,
        img: "https://i.discogs.com/QNDHhc5uZ_c3IhiRq-NTYXS2jSk_r_6UgDN4ZAEOkFA/rs:fit/g:sm/q:90/h:585/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU3MTMz/MS0xMTY5NTMxNDg4/LmpwZWc.jpeg"
    },
    {
        id: "4",
        tipo: "album",
        nombre: "Illmatic",
        artista: "Nas",
        genero: ["Rap", "Hip Hop"],
        info: "Illmatic es el álbum debut del rapero estadounidense Nas, lanzado el 19 de abril de 1994 por Columbia Records. Después de firmar con el sello con la ayuda de MC Serch, Nas grabó el álbum entre 1992-1993 en Chung King Studios, Battery Studios, y Unique Recording Studios en Nueva York.",
        anio: "1994",
        precio: 1500, 
        img: "https://media.pitchfork.com/photos/5929c199c0084474cd0c337b/1:1/w_450%2Cc_limit/111d1a3b.jpg"
    },
    {
        id: "5",
        tipo: "album",
        nombre: "All Eyez On Me",
        artista: "2Pac",
        genero: ["Rap", "Hip Hop", "G-Funk"],
        info: "All Eyez on Me es el cuarto álbum de estudio del rapero 2Pac, lanzado el 13 de febrero de 1996. Fue el último álbum de 2Pac con vida, ya que murió exactamente 7 meses después, el 13 de septiembre de 1996. Es el primer doble álbum de rap en la historia, y Disco de Diamante.",
        anio: "1996",
        precio: 3000,
        img: "https://upload.wikimedia.org/wikipedia/en/1/16/Alleyezonme.jpg"
    },
    {
        id: "6",
        tipo: "album",
        nombre: "Ready To Die",
        artista: "The Notorious B.I.G",
        genero: ["Rap", "Hip Hop", "G-Funk"],
        info: "Ready to Die es el álbum debut de estudio del rapero estadounidense The Notorious B.I.G., lanzado el 13 de septiembre de 1994 bajo los sellos discográficos Bad Boy Records y Arista Records.",
        anio: "1994",
        precio: 3000,
        img: "https://media.pitchfork.com/photos/5929c1bf5e6ef9596932375b/1:1/w_600/47966ea0.jpg"
    },
    {
        id: "7",
        tipo: "album",
        nombre: "The Chronic",
        artista: "Dr. Dre",
        genero: ["Rap", "Hip Hop", "G-Funk"],
        info: "The Chronic es el álbum debut como solista del rapero estadounidense, Dr. Dre, publicado el 15 de diciembre de 1992 a través de la discográfica Death Row Records y distribuido por Priority Records.",
        anio: "1992",
        precio: 2500, 
        img: "https://caracoltv.brightspotcdn.com/dims4/default/53931b4/2147483647/strip/true/crop/828x820+0+0/resize/828x820!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F66%2Fbb%2Fc83e82a741cfbd15451f50d2a443%2Fdr-dre-the-chronic.jpg"
    },
    {
        id: "8",
        tipo: "album",
        nombre: "Nevermind",
        artista: "Nirvana",
        genero: ["Grunge", "Rock Alternativo"],
        info: "Nevermind es el segundo álbum de estudio de la banda estadounidense de grunge Nirvana, publicado en septiembre de 1991. Producido por Butch Vig, Nevermind fue el primer lanzamiento de la banda con DGC Records.",
        anio: "1991",
        precio: 6500,
        img: "https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg?auto=compress,format"
    },
    {
        id: "9",
        tipo: "album",
        nombre: "Ten",
        artista: "Pearl Jam",
        genero: ["Grunge", "Rock Alternativo"],
        info: "Ten es el álbum debut de estudio de la banda de grunge estadounidense Pearl Jam, lanzado el 27 de agosto de 1991, por la discográfica Epic Records.",
        anio: "1991",
        precio: 2500,
        img: "https://i.scdn.co/image/ab67616d0000b273d400d27cba05bb0545533864"
    },
    {
        id: "10",
        tipo: "album",
        nombre: "Machine Head",
        artista: "Deep Purple",
        genero: ["Hard Rock", "Heavy Metal"],
        info: "Machine Head es el sexto álbum de estudio de la banda británica de hard rock Deep Purple, grabado en diciembre de 1971 en Montreux, Suiza, y publicado el 25 de marzo de 1972 a través de Purple Records.",
        anio: "1971",
        precio: 2000, 
        img: "https://progrography.com/wp-content/uploads/2019/09/machinehead.jpg"
    },
    {
        id: "11",
        tipo: "album",
        nombre: "Sticky Fingers",
        artista: "The Rolling Stones",
        genero: ["Rock", "Rock & Roll"],
        info: "Sticky Fingers es el noveno álbum de estudio de la banda de rock británica The Rolling Stones, publicado en abril de 1971.",
        anio: "1971",
        precio: 3000,
        img: "https://www.hamartia.com.ar/wp-content/uploads/2021/11/71biD0lQgyL._SL1200_.jpg"
    },
    {
        id: "12",
        tipo: "album",
        nombre: "Discovery",
        artista: "Daft Punk",
        genero: ["Musica Disco", "Musica House", "Electro"],
        info: "Discovery es el segundo álbum de estudio del dúo francés de música house Daft Punk, lanzado en marzo de 2001. Marcó un cambio en el sonido desde el Chicago house al disco, post-disco y house inspirado en el synthpop.",
        anio: "2001",
        precio: 3500,
        img: "https://upload.wikimedia.org/wikipedia/pt/2/28/Daft_Punk_Discovery.jpg"
    },
    {
        id: "13",
        tipo: "album",
        nombre: "Ahi Vamos",
        artista: "Gustavo Cerati",
        genero: ["Rock", "Rock Español", "Pop Rock"],
        info: "Ahí vamos es el cuarto álbum de estudio como solista del músico argentino Gustavo Cerati lanzado el 4 de abril de 2006 por Sony Music. El álbum obtuvo excelentes críticas y popularidad, especialmente en Argentina, Chile, Colombia y México.",
        anio: "2006",
        precio: 5000, 
        img: "https://i.scdn.co/image/ab67616d0000b273d543f7c7de880da5370922c0"
    },
    {
        id: "14",
        tipo: "album",
        nombre: "Bocanada",
        artista: "Gustavo Cerati",
        genero: ["Rock Alternativo", "Rock Español"],
        info: "Bocanada es el segundo álbum de estudio como solista del músico argentino Gustavo Cerati, el primero luego de la disolución de la banda Soda Stereo.​ Fue publicado el 28 de junio de 1999 a través del sello discográfico BMG Ariola, recibiendo excelentes críticas por prensa especializada como de los fanáticos.",
        anio: "1999",
        precio: 4500,
        img: "https://i.scdn.co/image/ab67616d0000b2731152471596980e1bba03b6ab"
    },
    {
        id: "15",
        tipo: "album",
        nombre: "Thriller",
        artista: "Michael Jackson",
        genero: ["Pop", "Pop Rock", "R&B"],
        info: "Thriller es el sexto álbum de estudio del cantante estadounidense Michael Jackson. Fue lanzado el 30 de noviembre de 1982 por Epic Records. Permanece como el álbum más vendido de la historia, con ventas estimadas en 70 millones de copias en todo el mundo.",
        anio: "1982",
        precio: 6500,
        img: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
    },
    {
        id: "16",
        tipo: "album",
        nombre: "Bad",
        artista: "Michael Jackson",
        genero: ["Pop", "Pop Rock", "R&B", "Soul"],
        info: "Bad es el séptimo álbum de estudio del cantante estadounidense Michael Jackson. Fue lanzado el 31 de agosto de 1987 por Epic Records. Fue escrito y grabado en un periodo de casi un año y marcó la colaboración final entre el intérprete y el productor Quincy Jones.",
        anio: "1987",
        precio: 5000, 
        img: "https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png"
    },
    {
        id: "17",
        tipo: "album",
        nombre: "The Score",
        artista: "The Fugees",
        genero: ["Rap", "Hip Hop", "R&B", "Soul"],
        info: "The Score es el segundo y último álbum de estudio del trío estadounidense de hip hop The Fugees, publicado en todo el mundo el 13 de febrero de 1996 en Columbia Records.",
        anio: "1996",
        precio: 2500,
        img: "https://media.pitchfork.com/photos/609d453a397206388541712e/1:1/w_600/Fugees:%20The%20Score.jpeg"
    },
    {
        id: "18",
        tipo: "album",
        nombre: "Metallica",
        artista: "Metallica",
        genero: ["Heavy Metal"],
        info: "Metallica es el quinto álbum de estudio del grupo musical estadounidense Metallica. Fue el primer álbum de estudio de la banda producido por Bob Rock. Recibió elogios de la crítica y se convirtió en el álbum más vendido del grupo musical.",
        anio: "1991",
        precio: 5000,
        img: "https://files.soniccdn.com/images/articles/amp/37887.jpg"
    },
    {
        id: "19",
        tipo: "album",
        nombre: "Holy Diver",
        artista: "Dio",
        genero: ["Heavy Metal", "Hard Rock"],
        info: "Holy Diver es el álbum debut de la banda de heavy metal Dio.​ Lanzado el 25 de mayo de 1983. Fue certificado disco de oro en los Estados Unidos en 1984 y de platino en 1989.",
        anio: "1983",
        precio: 2500, 
        img: "https://upload.wikimedia.org/wikipedia/en/0/08/DioHolyDiver.jpg"
    },
    {
        id: "20",
        tipo: "album",
        nombre: "Californication",
        artista: "Red Hot Chili Peppers",
        genero: ["Rock", "Rock Alternativo", "Funk Rock"],
        info: "Californication es el nombre del séptimo álbum de estudio de la banda estadounidense Red Hot Chili Peppers. Rick Rubin lo produjo y Warner Bros. Records lo lanzó al mercado el 8 de junio de 1999.",
        anio: "1999",
        precio: 5000,
        img: "https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg"
    },
    {
        id: "21",
        tipo: "album",
        nombre: "The Low End Theory",
        artista: "A Tribe Called Quest",
        genero: ["Rap", "Hip Hop", "Jazz Rap"],
        info: "The Low End Theory es el segundo álbum del grupo estadounidense de hip hop, A Tribe Called Quest, publicado el 24 de septiembre de 1991 por el sello Jive Records.",
        anio: "1991",
        precio: 2500,
        img: "https://upload.wikimedia.org/wikipedia/en/4/42/ATribeCalledQuestTheLowEndtheory.jpg"
    },
    {
        id: "22",
        tipo: "album",
        nombre: "Enter The Wu-Tang (36 Chambers)",
        artista: "Wu-Tang Clan",
        genero: ["Rap", "Hip Hop"],
        info: "Enter the Wu-Tang (36 Chambers) es el primer álbum de estudio del grupo de hip hop estadounidense Wu-Tang Clan, publicado el 9 de noviembre de 1993 por Loud Records, y distribuido a través de RCA Records.",
        anio: "1993",
        precio: 2500, 
        img: "https://upload.wikimedia.org/wikipedia/en/5/53/Wu-TangClanEntertheWu-Tangalbumcover.jpg"
    },
    {
        id: "22",
        tipo: "producto",
        nombre: "Campera - No Love",
        artista: "Eminem",
        genero: ["Rap", "Hip Hop"],
        info: "Campera con cierre y capucha Unisex de Eminem.",
        anio: "2023",
        precio: 2500,
        img: "../img/camperaEminem2.png"
    }
];

const seccionProductos = document.getElementById("seccion-productos");
let productosFiltro = productos.slice();

function mostrarProductos(){
    productosFiltro.forEach((product) => {
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
        let containerImg = document.createElement("div");
        containerImg.className = "container-product-img"
        let imagen = document.createElement("img");
        imagen.src = product.img;
        imagen.alt = product.nombre; 
        containerImg.append(imagen)
        
        h3.addEventListener("click", () => {
            window.location.href = "../html/detalleProducto.html?product=" + encodeURIComponent(JSON.stringify(product));
          });
          
          imagen.addEventListener("click", () => {
            window.location.href = "../html/detalleProducto.html?product=" + encodeURIComponent(JSON.stringify(product));
          });
          
          
    
        divInfoProducto.append(h3);
        divInfoProducto.append(pPrice);
        divInfoProducto.append(comprar);
    
        content.append(containerImg);
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
    
}
let buscador = document.getElementById("buscador");

function hayBusqueda(){
    const urlParams = new URLSearchParams(window.location.search);
    const busqueda = urlParams.get("product");
    
    if (busqueda !== null){
        buscador.value = busqueda;
        filtroBusqueda(busqueda);
        refreshProductos();
    }
}

function filtroBusqueda(busqueda) {
    productosFiltro = productosFiltro.filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));
}





function refreshProductos(){
    seccionProductos.innerHTML = "";
    mostrarProductos();
}

buscador.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const busqueda = buscador.value.trim();
      if (busqueda !== "") {
        // Redirigir a productos.html solo si la URL actual no es productos.html
        if (window.location.href.indexOf("productos.html") === -1) {
            window.location.href = "../html/productos.html?product=" + busqueda;
        } else {
            filtroBusqueda(busqueda);
            refreshProductos();
        }
      }
    }
  });





  


