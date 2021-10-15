




const invertir = (texto) => {
    let datosInvertidos = ''
    for(let letra of texto){
      datosInvertidos = letra + datosInvertidos;
     
    }

    return datosInvertidos;

}

console.log(invertir("fabian"));

/* console.log(invertir("fabian")); */

const funcionJs = (palabra) => {
    
    let dato = palabra.split("").reverse().join("");
    return dato;

   }
   
   console.log(funcionJs("juan"));