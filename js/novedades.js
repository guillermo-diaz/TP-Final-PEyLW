

function generarNrosAleatorios() {
    let p = [];
    while (p.length < 9) {
      let numeroAleatorio = Math.floor(Math.random() * productos.length);
      if (!p.includes(numeroAleatorio) && numeroAleatorio !== 0) {
        p.push(numeroAleatorio);
      }
    }
    return p;
  }

  function generarProductosAleatorios() {
    let prod = [];
    let index = generarNrosAleatorios();
    console.log(index);

    for (let i = 0; i < index.length; i++) {
        prod.push(productos.find((e) => e.id === index[i]+""));
    }
    
    return prod;
  }

  cargarProductosNovedad();
  
  function cargarProductosNovedad(){
    let prodAleatorio = generarProductosAleatorios();
    console.log(prodAleatorio);
    let indexProd = 0;
    let cards = document.querySelectorAll('.card-content');

    cards.forEach((c) => {
      let containerImg = c.querySelector(".image");
      let imagen = document.createElement("img");
      imagen.src = prodAleatorio[indexProd].img;

      containerImg.append(imagen);

      let containerNombre = c.querySelector(".name-product");
      let name = document.createElement("h4");
      name.textContent = prodAleatorio[indexProd].nombre;

      containerNombre.append(name);

      let containerPrice = c.querySelector(".price-product");
      let price = document.createElement("p");
      price.textContent = "$"+prodAleatorio[indexProd].precio;

      containerPrice.append(price);
      indexProd++;
    });
    

  }

  function cambiarSlide() {
    swiper.slideNext(); // Cambiar al siguiente slide
  }

  setInterval(cambiarSlide, 5000);

