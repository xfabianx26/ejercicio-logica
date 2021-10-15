
const mayusMinus = (texto) => {

    let mayus = 0;
    let minus = 0;
    let resultado = "";
    let expresion = new RegExp(/[A-Z]/)

    for(let letra of texto){
        
        if(expresion.test(letra))
        {
            mayus++;
        }else{
            minus++;
        }
    }

    if(mayus > minus){

        resultado = texto.toUpperCase()
    }else{

        resultado = texto.toLowerCase()
    }


    return resultado;
    

}

console.log(mayusMinus("FABIANdd"));