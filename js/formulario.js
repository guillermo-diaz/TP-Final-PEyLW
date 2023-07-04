let carritoCompra = document.getElementById("carrito");

carritoCompra.removeEventListener("click", mostrarModalCarrito);

(document.getElementById("inputAnio")).placeholder = (new Date).getFullYear();
(document.getElementById("inputMes")).placeholder = (new Date).getMonth() + 1;

function mostrarPrecio(){
    let elem = document.getElementById("precio-pagar");

    elem.textContent = "$"+getPrecioTotal();
}

mostrarPrecio();



document.getElementById("submit-comprar").addEventListener("click", validar);

function validar(){
    let v1, v2;
    console.log("hola")
    v1 = verificarDatosPersonales();
    v2 = verificarDatosPago();
    console.log(v1);
    console.log(v2);

    if (v1 && v2){
        vaciarCarrito();
        alert("Pago Realizado");
    }
}

function verificarDatosPersonales(){
    let v1, v2, v3, v4, v5, v6, elemDireccion;
    v1 = verificarNombre();
    v2 = verificarApellido();
    v3 = verificarCorreo();
    v4 = verificarCiudad();
    v5 = verificarPais();
    v6 = verificarCP();

    elemDireccion = document.getElementById("inputDireccion");
    if ((elemDireccion.value).length > 0 ) {
        verificado(elemDireccion);
    }

    
    return v1 && v2 && v3 && v4 && v5 && v6;

}

//verifica que el CP tenga 3 0 4 dig y este en el rango
function verificarCP(){
    let elem = document.getElementById("inputCP");
    let cp = elem.value;

    flag = !isNaN(parseInt(cp)) && cp.length >= 3 && cp.length <= 4;
    flag ? verificado(elem) : reportarError(elem);
    return flag;
}

//verifica que la ciudad no tenga nros y no sea vacia
function verificarPais(){
    let elem = document.getElementById("inputPais");
    let pais = elem.value;

    flag = pais.length > 0 && !tieneNumero(pais);
    flag ? verificado(elem) : reportarError(elem);
    return flag;
}

//verifica que la ciudad no tenga nros y no sea vacia
function verificarCiudad(){
    let elem = document.getElementById("inputCiudad");
    let ciudad = elem.value;

    flag = ciudad.length > 0 && !tieneNumero(ciudad);
    flag ? verificado(elem) : reportarError(elem);
    return flag;
}

function verificarCorreo(){
    let elem, correo, expReg, flag;
    elem = document.getElementById("inputEmail");
    correo = elem.value;
    // Expresión regular para validar el formato del correo electrónico
        expReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        flag = expReg.test(correo);
        flag ? verificado(elem) : reportarError(elem);
        
        return flag;
    }
    
    function verificarNombre(){
        let nombreInput = document.getElementById("inputNombre");
        let nombre = nombreInput.value;
    
        //nombres con menos de 2 letras o que contengan numeros no son validos
        if (nombre.length == 0 || tieneNumero(nombre)){
            reportarError(nombreInput);
            return false;
        } else {
            verificado(nombreInput);
            return true;
        }
    
    }
    
    function verificarApellido(){
        let apellidoInput = document.getElementById("inputApellido");
        let apellido = apellidoInput.value;
    
        //apellidos con menos de 2 letras o que contengan numeros no son validos
        if (apellido.length <= 1 || tieneNumero(apellido)){
            reportarError(apellidoInput);
            return false;
        } else {
            verificado(apellidoInput);
            return true;
        }
    }
    
    //verifica si el string del parametro tiene un numero
    function tieneNumero(texto) {
        for (let i = 0; i < texto.length; i++) {
          if (!isNaN(parseInt(texto[i]))) {
            return true;
          }
        }
        return false;
      }


    function verificarDatosPago(){
        let v1, v2, v3, v4, v5, v6;
        v1 = verificarMes();
        v2 = verificarNombreEnTarjeta();
        v3 = verificarNombreTarjeta();
        v4 = verificarAnio();
        v5 = verificarNroTarjeta();
        v6 = verificarCVV();
        
        return v1 && v2 && v3 && v4 && v5 && v6 && !tarjetaVencida();
    }


     //verifica que el nro del cvv tenga 3 o 4 
    function verificarCVV(){
        let elem = document.getElementById("inputCVV");
        let nro = elem.value;

        let flag = !isNaN(parseInt(nro)) && nro.length >= 3 && nro.length <= 4;
        flag ? verificado(elem) : reportarError(elem);
        return flag;
    }

    //verifica que el nro >8 
    function verificarNroTarjeta(){
        let elem = document.getElementById("inputNroTarjeta");
        let nro = (elem.value).replace(new RegExp("-", 'g'), '');

        let flag = !isNaN(parseInt(nro)) && nro.length >= 8;
        flag ? verificado(elem) : reportarError(elem);
        return flag;
    }


    //solo verifica si es positivo, es un numero  y si no excede el rango de los meses [1, 12]
    function verificarMes(){
        let elem = document.getElementById("inputMes");
        let mes = parseInt(elem.value);
        let flag = !isNaN(mes) && mes > 0 && mes <= 12;
    
        flag ? verificado(elem) : reportarError(elem);
        return flag;
    }
    function verificarNombreTarjeta() {
        let elem= document.getElementById("inputNombreTarjeta");
        let name = ((elem.value).toLowerCase()).trim();
        let flag = (name === "visa" || name === "mastercard" || name === "americanexpress");
        flag ? verificado(elem) : reportarError(elem);
        return flag;
    }

    function verificarNombreEnTarjeta() {
        let elem= document.getElementById("inputNombreEnTarjeta");
        let name = ((elem.value).toLowerCase()).trim();
        let flag = name.length > 0 && !tieneNumero(name);
        flag ? verificado(elem) : reportarError(elem);
        return flag;
    }




//solo verifica si es positivo, es un numero 
function verificarAnio() {
    let elem = document.getElementById("inputAnio");
    let anio = elem.value;
    let flag = !isNaN(anio) && anio > 0;
    flag ? verificado(elem) : reportarError(elem);
    return flag;
}

function tarjetaVencida(){
    let flag = false;
    let elemMes = document.getElementById("inputMes");
    let elemAnio = document.getElementById("inputAnio");
    let fechaActual = new Date();

    if (parseInt(elemAnio.value) == fechaActual.getFullYear()){
        if (parseInt(elemMes) <= fechaActual.getMonth() + 1){
            reportarError(elemMes);
            flag = true;
        } 
    } else if (parseInt(elemAnio.value) < fechaActual.getFullYear()){
        reportarError(elemAnio);
        flag = true;
    }
    return flag;
}


  //sirve para reportar que el input es incorrecto
  function reportarError(elem){
    elem.style.borderColor = "red";
  }

  //sirve para reportar que el input es correcto
  function verificado(elem){
    elem.style.borderColor = "green";
  }

