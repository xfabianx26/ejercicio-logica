
function cuadro(n){
    let cuadrado = "";
    

    for (let i = 0; i < n; i++) {
       cuadrado += " * "
    }
    cuadrado += "\n"

    for (let i = 0; i < (n-1); i++) {
        cuadrado +=" * "
        for (let j = 0; j < (n-1); j++) {
            cuadrado +="  "
         }
         cuadrado += " *\n"         
     }


 
    for (let i = 0; i < n; i++) {
        cuadrado += " * "
     }
 

    return cuadrado;
}


console.log(cuadro(4));