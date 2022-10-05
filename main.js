let fichas=[0,1,2,3,4,5,6,7,8] //Asignamos en un array los valores de cada posicion
let num_click=0; //Inicializamos contador de los click que se realicen
let primerClick=0; //Inicializamos el contador para el primer click

// Creamos la funcion seleccionar para cambiar las posiciones de las imagenees 
function seleccionar(casilla){
// Al iniciar la funcion se cuenta el num_click
num_click++;
//Se asigna el valor de la casilla al contador primerClick
if (num_click==1) {
    primerClick=casilla;
}
if (num_click==2) {
    // Creamos una variable para almacenar el segundo valor de la casilla elegida
    let segundoCLick=casilla;
    // Cambio de las posiciones de las imagenes según el cambio realizado entre la primera posicion seleccionada y la segunda.
    let intercambio = fichas[primerClick];
    fichas[primerClick]=fichas[segundoCLick];
    fichas[segundoCLick]=intercambio;

    // Se reinicia el contador para el siguiente movimiento
    num_click=0;
    // Se llama la funcion moverFichas
    moverFichas(); 
}
// Se llama la funcion quitarBorde
quitarBorde();
// Se le asigna un borde a la casilla seleccionada 
document.getElementById("img_"+casilla).style.border="solid 2px blue";
}

// Se crea una funcion para quitar el borde de la imagen
function quitarBorde(){
    for (let i = 0; i < 9; i++) {
        document.getElementById("img_"+i).style.border= null;
    }
}

// Function desordenar las imagenes al comienzo de la partida
function desordenar(){
    fichas=fichas.sort(()=>{
        // 0.5 crea un orden aleatorio
        return Math.random()-0.5
    });
}

// Funcion moverFichas para mantener almacenado el valor de la imagen que se ha movido
function moverFichas(){
    // Se crea un ciclo for para recorrer el array
    for (let i = 0; i < 9; i++) {
        // almacenar el valor de la posicion en una variable
        let imagenFicha=fichas[i];
        // colocar la imagen seleccionada en la casilla 
        document.getElementById("img_"+i).src = "puzle/i"+(imagenFicha+1)+".jpg";
    }
}

// Funcion que verifique el correcto orden de las imagenes
function comprobarPuzle(){
    let comprobar=true;
    // Ciclo que recorre el arreglo
    for (let i = 0; i < 9; i++) {
        // condicional que compara que esten en desorden
        if (fichas[i]!=i) {
            comprobar=false;
        }
    }
    // Condicional para generar la alerta
    if (comprobar) {
        alert("Puzle Completo.... Felicitaciones")
    }else{
        alert("Puzle Incompleto.... Sigue intentando")
    }
}

// Asignamos el valor del boton del html a una variable
let boton=document.querySelector("#comprobar");

// Añadimos evento de escucha click
boton.addEventListener('click',(event)=>{
    comprobarPuzle();
})

// Ejecucion de funciones al cargar la pagina
window.onload=function(){
    // Llamada a la funcion desordenar 
    desordenar();
    // Llamada a funcion moverFichas para el primer movimiento
    moverFichas();
}


