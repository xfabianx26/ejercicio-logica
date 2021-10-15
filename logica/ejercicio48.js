



function soloUnaVez(texto)
{
    /* definir variables */
    let contadores = {},
        resultado = [],
        letras = texto.split('').filter(letra => letra.trim().length >= 1 )

        /* Generar contadores */
        for(letra of  letras)
        {
            if(!contadores[letra])
            {
                contadores[letra] = 1
            }else{
                contadores[letra]++
            }
            
        }

        /* eliminar la letra que se repita */
        for(letra in contadores){
            if(contadores[letra] >= 2)
            {
                delete contadores[letra]
            }else{
                resultado.push(letra)
            }
        }

        return [resultado, resultado[0]]
}

console.log(soloUnaVez("frase frase Hoy"));
