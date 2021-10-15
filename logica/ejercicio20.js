



const esAnaGrama = (palabra, posibleAnagrama) => {
    
    let dato = palabra.toLowerCase().split("").sort().join("");
    let anagrama = posibleAnagrama.toLowerCase().split("").sort().join("");

    if(dato == anagrama){
        return true;
    }else{
        return false;
    }
}
console.log(esAnaGrama("sergio","riesgo"));
