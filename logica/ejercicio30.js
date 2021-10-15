


function eliminarDuplicados(array){

    let filtro = array.filter(i => {

        return typeof i === "number";
    });

    let set_sin_duplicados = new Set(filtro)
    return Array.from(set_sin_duplicados)

  
}

console.log(eliminarDuplicados(["uno",1,1,2,3,4,5,5,4]));

