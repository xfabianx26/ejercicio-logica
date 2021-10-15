


const tantoPorCiento = (porcentaje, numero) => {

    let operacion = (numero * (porcentaje/100))

    let resultado = `El ${porcentaje}% de  ${numero} es: ${operacion}`
    return resultado
}

console.log(`El porcentaje dado es ${tantoPorCiento(20,100)}`);