
const capitalizada = (texto) =>{

   let palabras = [];

   for(let palabra of texto.split(" ")){
    palabras.push(palabra[0].toUpperCase() + palabra.substring(1))


   }
   
   return palabras.join(" ")
}


console.log(capitalizada("fabian es lindo pero papasote"));