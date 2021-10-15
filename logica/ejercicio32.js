


function numeroCuadrado(array){

    let filtro = array.filter(i  => typeof i === "number")

    let numeroCuadrado = filtro.map(i => Math.pow(i, 2))

    return numeroCuadrado
    
}


console.log(numeroCuadrado([5,6,7,"dsds",true]));