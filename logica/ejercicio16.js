

function vocales(texto){

    let coincidencias = texto.match(/[aeiou]/gi)

    return coincidencias ? `el número del arreglo: ${coincidencias.length}`: 'No hay vocales en el texto';
}

console.log(vocales("fabian"));
