


function elemenetos(array1, array2){

    let elementoIguales = array1.filter(item => array2.includes(item))

    return elementoIguales
}

console.log(elemenetos([1,2,3,4],[1,6,7,8]));


