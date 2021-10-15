

 /* cuadrado de un numero es un numero multiplicado por si mismo */
function cuadrado(numero){
    return numero*numero;
}


function mostrar(numero){
    for (let i = 1; i <= numero; i++) {
        console.log(cuadrado(i));
        
    }
}

mostrar(24)