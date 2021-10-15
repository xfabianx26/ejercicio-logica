



function triangulo(numero){
    let mitad = Math.floor(numero -1)
    let resultado = ""

    /* bucle total fila */
    for (let fila = 0; fila < numero; fila++) {
        let nivel = "";

        /* pintar asteriscos y espacio */
        for (let columna = 0; columna < ((2 * numero) -1); columna++) {
            if(mitad - fila <= columna && mitad  + fila >= columna)
            {
                nivel += "*"
            }else{
                nivel += " "
            }
            
        
        }
        resultado += nivel +"\n";
            

    }

    return resultado
}

console.log(triangulo(14));
