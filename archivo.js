// RECUPERANDO

var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var munieco = document.querySelector(".contenedor-muñeco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");


// var elemento = document.querySelector(".texto-resultado");
var copiar = document.querySelector(".boton-copiar").addEventListener("click",()=>{
    document.querySelector(".mensaje-copiar").classList.add("show");
    Copiar(resultado);

    setTimeout(()=>{
        document.querySelector(".mensaje-copiar").classList.remove("show");
    },1300);
})

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


// RECUPERO AREA
function encriptar(){
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
    
}

function desencriptar(){
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}

function Copiar(resultado){
  const inputOculto = document.createElement("input");
  inputOculto.setAttribute("value", resultado.innerText);
  document.body.appendChild(inputOculto); 
  inputOculto.select();
  document.execCommand("copy");
  document.body.removeChild(inputOculto);
}

// RECUPERO TEXTO
function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

// OCULTAR EN SECTION 2
function ocultarAdelante(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal +  "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}
