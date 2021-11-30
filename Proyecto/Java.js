let btnAgregar = document.querySelector('.btnAgregar');
let btnEliminar = document.querySelector('.btnEliminar');

btnAgregar.addEventListener('click',agregar);
btnEliminar.addEventListener('click',agregar);
function agregar(){
  let rectangulo = document.querySelector('.rectangulo');
}
function eliminar(){
    alert('BOTON ELIMINAR');
}


let parra = document.querySelector('#pruebatexto');
parra.addEventListener('mouseover',cambiar);

function cambiar(){
    let imagenMatrix = document.querySelector('.imga');
    imagenMatrix.src = 'imagenes/Blade Runner.jpg';
}

function img1(){
    prompt('Cual es tu pelicula?');
}


function edad(){
    prompt('Pon tu edad');
}





