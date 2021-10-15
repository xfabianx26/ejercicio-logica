


function paresImpares(array)
{   
    
    return {
        pares: array.filter(i => i%2 === 0),
        impares: array.filter(i => i%2 !== 0)
    }
}

 /* npm install --save-dev jest */
console.log(paresImpares([1,2,3,4,5,6,7]));