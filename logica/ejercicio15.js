


function masUsado(texto){

    let mapeoLetras = {};
    let maximoRepeticiones = 0
    let letraMasRepetida = 0
    
    for (let letra of texto) {
        
        if(!mapeoLetras[letra]){
            mapeoLetras[letra] = 1;
        }else{
            mapeoLetras[letra]++;
        }
        
    }
    
    for(let letra in mapeoLetras){
        if(mapeoLetras[letra].toString().trim().length === 1 && mapeoLetras[letra] > maximoRepeticiones){
            maximoRepeticiones = mapeoLetras[letra]
            letraMasRepetida = letra;
        }
    }
    console.log(mapeoLetras);
    return letraMasRepetida
}


console.log("La letras más repetidas es: " +masUsado("fabian es muy papasito"));
