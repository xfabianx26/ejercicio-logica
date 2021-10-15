

const dividirArray = (arregloIntroducido, dividirArray) => {

  let arreglos = [];

  for(let elemento of arregloIntroducido){

    let ultimo = arreglos[arreglos.length -1];

    if(!ultimo || ultimo.length === dividirArray){
        arreglos.push([elemento])
    }else{
        ultimo.push(elemento);
    }
  }

  return arreglos



}


console.log(dividirArray([1,2,3,4,5],2));