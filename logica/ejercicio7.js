


function cuadro(numeroCuadro){
    let cuadrado = "";
    

    for (let i = 0; i < numeroCuadro; i++) {
       
        for (let j = 0; j < numeroCuadro; j++) {
            cuadrado += " * "
        
        }
        cuadrado += "\n";
    
    }

    return cuadrado;
}


console.log(cuadro(5));