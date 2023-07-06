let listElements = document.querySelectorAll('.list-button-click');


listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

function ordenarPorPrecioDescendente() {
  productosFiltro =  productosFiltro.sort((a, b) => b.precio - a.precio);
}

function ordenarPorPrecioAscendente() {
  productosFiltro =  productosFiltro.sort((a, b) => a.precio - b.precio);
}

function ordenarPorGenero(genero) {
  productosFiltro = productosFiltro.filter(producto => producto.genero.includes(genero));
}

function ordenarAlfabeticamente() {
  productosFiltro = productosFiltro.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));

}

function ordenarAlfabeticamenteReverso() {
  ordenarAlfabeticamente();
  productosFiltro= productosFiltro.reverse();
}

const generoLinks = document.querySelectorAll('#genero-filtro .list-show .list-inside');


generoLinks.forEach((link) => {
  let generoElement = link.querySelector('a');
  let genero = generoElement.textContent;
  
  if (genero !== "Todos") {
      link.addEventListener("click", () => {
        resetBackgroundGenero();
        link.style.background = "#dfe0e0";
        productosFiltro = productos.slice();
        ordenarPorGenero(genero);
        refreshProductos();
      });
  } else {
    link.addEventListener("click" , () => {
      resetBackgroundGenero();
      link.style.background = "#dfe0e0";
      productosFiltro = productos.slice();
      refreshProductos();
    });
  }

})

function resetBackgroundGenero(){
  generoLinks.forEach((l) => {
    l.style.background = "white";
  })
}



const filtroPrecio = document.querySelectorAll('#precio-filtro .list-show .list-inside');

filtroPrecio.forEach((prec) => {
  let formato = (prec.querySelector('a')).textContent;

  if (formato === "Menor precio"){
    prec.addEventListener("click", () => {
      resetBackgroundPrecio();
      prec.style.background = "#dfe0e0";
      ordenarPorPrecioAscendente();
      refreshProductos();
    });
  } 
  if (formato === "Mayor precio"){
    prec.addEventListener("click", () => {
      resetBackgroundPrecio();
      prec.style.background = "#dfe0e0";
      ordenarPorPrecioDescendente();
      refreshProductos();
    });
  }
});

function resetBackgroundPrecio(){
  filtroPrecio.forEach((p) => {
    p.style.background = "white";
  })
}

const filtroAlfabeto = document.querySelectorAll('#alfabeto-filtro .list-show .list-inside');

filtroAlfabeto.forEach((p) => {
  let formato = (p.querySelector('a')).textContent;

  if (formato === "a-z"){
    p.addEventListener("click", () => {
      resetBackgroundAlfabeto();
      p.style.background = "#dfe0e0";
      ordenarAlfabeticamente();
      refreshProductos();
    });
  } 
  if (formato === "z-a"){
    p.addEventListener("click", () => {
      resetBackgroundAlfabeto()
      p.style.background = "#dfe0e0";
      ordenarAlfabeticamenteReverso();
      refreshProductos();
    });
  }
});

function resetBackgroundAlfabeto(){
  filtroAlfabeto.forEach((p) => {
    p.style.background = "white";
  })
}




