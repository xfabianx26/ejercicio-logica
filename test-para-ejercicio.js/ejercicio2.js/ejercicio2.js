

const palindromo = (letra) => {
    
    let invertido = letra.split('').reverse().join('');

    return (invertido === letra)

 
}


module.exports = palindromo