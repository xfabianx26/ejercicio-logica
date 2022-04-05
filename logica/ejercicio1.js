
//agrego comentario

const tablaMultiplicar = (tabla) =>{
    console.log("la tabla que elegiste es la: "+tabla+"\n");
    let resultado;
    for (let i = 1; i <= 10; i++) {
        resultado += `${i} X ${tabla} = ${i*tabla} \n`
        
    }

   
    return resultado
}

console.log(tablaMultiplicar(3));

