


function numeroCapicua(numero){
   
    let capicua =  parseInt(numero.toString().split('').reverse().join('')) 
   

    return (capicua === numero) ? 'El número es capicua' : 'No es capicua'

}

console.log(numeroCapicua(2002)); 