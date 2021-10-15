

function divisores(numero, divisores){
    
   
            if(numero%divisores === 0){
               return divisores
            }
            return false
        
 
}

function mostrarDivisores(numero){
    
    for (let i = 0; i < numero; i++) {
       let esDivisor = divisores(numero, i);

        if(esDivisor) console.log(esDivisor);
        
    }

}


console.log(mostrarDivisores(20));