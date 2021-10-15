


function ejercicioLightyear(numero){

        let resultado = "";
    
         if(numero%3 === 0 && numero%5 === 0){
            resultado += "BuzzLightyear ";
         }else if(numero%3 === 0){
            resultado += "lighyear ";
         }else if(numero%5 ===0){
            resultado += "Lightyear ";
         }else{
            return numero;
         }
 

    return resultado;

}

function imprimir(numero){

    for (let i = 1; i < numero; i++) {
       console.log(ejercicioLightyear(i));  
        
    }
}

imprimir(15)
