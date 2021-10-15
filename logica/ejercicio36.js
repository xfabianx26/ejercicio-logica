



function contarLetrasVocales(texto){
    
    let vocal = 0,
     consonantes = 0,
     textolimpio = ""
/* split convierta un array  el filter solo lee array */
    textolimpio = texto.split("")
    .filter( letra => /[áéíóú\w]/gi.test(letra) && isNaN(letra)).join("")

    
    for(let letra of textolimpio){

        if(/[aeiouáéíóú]/gi.test(letra)){
            vocal++;
        }else{
            consonantes++;
        }
    }

   return [consonantes, vocal]

}

let result = contarLetrasVocales("Fabián andres 111")
console.log("Consonantes:", result[0]);
console.log("Vocales:",result[1]);