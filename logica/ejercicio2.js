

const palindromo = (letra) => {
    
    let invertido = letra.split('').reverse().join('');

    if(invertido === letra){
       return 'Es un palindromo'
    }else{
         return 'No es un palindromo'
    }

 
}
const imprimir = () => {

    return palindromo("oso");
}


console.log(`Descubre si es palindromo o no ${imprimir()}`);