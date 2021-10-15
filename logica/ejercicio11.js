

function censurado(texto=false, busqueda=false){

    let resultado = "";

    if(!texto && !busqueda){
      resultado = "No puede leer el texto y la busqueda"
    }else if(!texto && busqueda){
        resultado = "No puede leer el texto. Pero la busqueda esta disponible"
    }else if(texto && !busqueda){
        resultado = "Si puede leer el texto. Pero la busqueda no esta disponible"
    }else{
        resultado = texto.replace(new RegExp(busqueda, 'gi'), "[-CENSURA]-")
    }

    return resultado
}

console.log(censurado("hola22 hola", "hola"));