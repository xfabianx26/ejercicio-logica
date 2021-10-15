

/* function repetirNumero(texto,repetir){

    let resultado = "";

    for (let i = 0; i < repetir; i++) {
        
        resultado += ` ${texto}`
        
    }

    return resultado
}

console.log(repetirNumero("fabian",8)); */

String.prototype.repiteme = function repetirNumero(repetir){

    let resultado = "";

    for (let i = 0; i < repetir; i++) {
        
        resultado += this +" "
        
    }

    return resultado
}

console.log("fabian".repiteme(5));