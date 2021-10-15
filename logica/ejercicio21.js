

function recortar(texto, recortar){
let cadRecort  = '';

    if(typeof texto === String && recortar === Number){
        cadRecort = texto.substring(0,recortar);
    }else{
        cadRecort = "texto tiene que ser un 'String ' y recortar un 'Number'";
    }


return cadRecort
}
console.log(recortar("fabian ortiz valiente",2));