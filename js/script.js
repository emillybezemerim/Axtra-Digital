var botaoVoltar;
var botaoAvancar;
var moldura;
var fotos;
var indice;
var temporizador;
 
botaoVoltar = document.getElementById("btnVoltar");
botaoAvancar = document.getElementById("btnAvancar");
moldura = document.getElementById("moldura");
 
fotos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
indice = 0;
 
 
/* --- Início --- */
window.onload = inicio;
 
function inicio() {
    botaoVoltar.onclick = voltarFoto;
    botaoAvancar.onclick = avancarFoto;
 
    mostrarFoto();
    automaticoFoto();
}
 
 
function voltarFoto() {
    if (indice > 0) {
        indice--;
    } else {
        indice = fotos.length - 1;
    }
 
    mostrarFoto();
    clearInterval(temporizador);
    automaticoFoto();
}
 
function avancarFoto() {
    if (indice < fotos.length - 1) {
        indice++;
    } else {
        indice = 0;
    }
 
    mostrarFoto();
    clearInterval(temporizador);
    automaticoFoto();
}
 
 
function automaticoFoto() {
    temporizador = setInterval(avancarFoto, 3000);
}
 
function mostrarFoto() {
    moldura.src = "img/" + fotos[indice];
    moldura.alt = "Imagem " + (indice + 1) + " do carrossel";
}