
function flujo1(numeroOpcion){
    var elemento1 = document.getElementById("quest1");
    var elemento2 = document.getElementById("quest2");
    if(numeroOpcion == 1){
        if(elemento1.classList.contains("ocultar")){
            elemento1.classList.remove('ocultar');
        }
        if(!elemento2.classList.contains("ocultar")){
            elemento2.classList.add('ocultar');
        }
    }
    else if(numeroOpcion == 2){
        if(elemento2.classList.contains("ocultar")){
            elemento2.classList.remove('ocultar');
        }

        if(!elemento1.classList.contains("ocultar")){
            elemento1.classList.add('ocultar');
        }
    }
}

function flujo2(numeroOpcion){
    var elemento = document.getElementById("quest2sub1");
    if(numeroOpcion == 1){
        if(elemento.classList.contains("ocultar")){
            elemento.classList.remove('ocultar')
        }
    }
    else if(numeroOpcion == 2){
        if(!elemento.classList.contains("ocultar")){
            elemento.classList.add('ocultar')
        }
    }
}


// funcion para controlar los elementos de adjuntar archivos

var contArchivos = 1;

function archivoAdjunto(numeroCard){
    var link = document.getElementById("linkArchivo");
    var subirArchivos = document.getElementById("subDoc" + numeroCard);
    var archivosAdjuntos = document.getElementById("docAdj" + numeroCard);
    if(contArchivos < 5){
            link.classList.remove("ocultar");
    }
    if(archivosAdjuntos.classList.contains("ocultar")){
        archivosAdjuntos.classList.remove("ocultar");
    }
    if(!subirArchivos.classList.contains("ocultar")){
        subirArchivos.classList.add("ocultar");
    }
    else{
        archivosAdjuntos.classList.add("ocultar");
        subirArchivos.classList.remove("ocultar");
    }
}

function archivoAdjunto2(numeroCard){
    var subirArchivos = document.getElementById("subDoc" + numeroCard);
    var archivosAdjuntos = document.getElementById("docAdj" + numeroCard);
    if(archivosAdjuntos.classList.contains("ocultar")){
        archivosAdjuntos.classList.remove("ocultar");
    }
    if(!subirArchivos.classList.contains("ocultar")){
        subirArchivos.classList.add("ocultar");
    }
    else{
        archivosAdjuntos.classList.add("ocultar");
        subirArchivos.classList.remove("ocultar");
    }
}

function eliminarAdjunto(numeroCard){
    var subirArchivos = document.getElementById("subDoc" + numeroCard);
    var archivosAdjuntos = document.getElementById("docAdj" + numeroCard);
    subirArchivos.classList.remove("ocultar");
    archivosAdjuntos.classList.add("ocultar");
}

function subirMasArchivos(){
    contArchivos = contArchivos + 1;
    var cardArchivos = document.getElementById("doc" + contArchivos);
    var link = document.getElementById("linkArchivo");
    cardArchivos.classList.remove("ocultar");
    link.classList.add("ocultar");

}

//acciones boton Activar y desactivar
function activarBtn(){
    var elementBoton = document.getElementById("btn");
    if(!elementBoton.classList.contains("activo")){
        elementBoton.classList.add("activo");
    }
}
function desactivarBtn(){
    var elementBoton = document.getElementById("btn");
    if(elementBoton.classList.contains("activo")){
        elementBoton.classList.remove("activo");
    }
}

//funciones para correr el slider
//recibe como parametro la cantidad de paginas y si le dio siguiente o atras
var contador = 0;
function sliderFotos(cantindad, accion){
    var idSlider = document.getElementById("idSliderFoto");

    if(accion == "siguiente"){
        if(contador < (cantindad -  1)){
            contador = contador + 1;
        }
    }

    if(accion == "atras"){
        if(contador > 0){
            contador = contador - 1;
        }
    }

    var desplaza = 82.5 * contador;

    idSlider.style.transform = "translate(" + desplaza + "%)";
}