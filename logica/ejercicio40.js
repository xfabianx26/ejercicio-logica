

function devolverValor(array){
    
    let ordenando = array.sort((a,b) => a -b)
    
    return {"bajo": ordenando[0],
            "alto": ordenando[ordenando.length -1]}

}

console.log(devolverValor([1,34,3,44,32,22]));
