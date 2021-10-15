

function masAparece(texto){

    let leerLetra = {}
    let masFrecuente = ""
    let valorMasFrecuente = 0

    if(typeof texto  === "string"){
        texto = texto.split(" ")
    }

    for(i of texto){
       
        if(leerLetra[i])
        {
            leerLetra[i]++
        }else{
            leerLetra[i] = 1
        }
        
    }


    
    for(let i in leerLetra){
        if(leerLetra[i] > valorMasFrecuente){
            valorMasFrecuente = leerLetra[i]
            masFrecuente = i
        }
    } 

     
    
}

masAparece("fabian andres ortiz fabian")