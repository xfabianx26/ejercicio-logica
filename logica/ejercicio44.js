

function dosPalabras(texto)
{
    let nuevoElemento = [];

    for(let palabra of texto){
        
        if(palabra.split(' ').length >= 2){
            nuevoElemento.push(palabra)
        }
    }
    

    return nuevoElemento
}

console.log(dosPalabras(["fabian ortiz  fabian", "maria tulia"]));
