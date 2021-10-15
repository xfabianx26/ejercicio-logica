


function escalones(escalera){

    let escalones = "";
   
    for (let i = 1; i < escalera; i++) {

        for (let j = 0; j < i; j++) {
            escalones +="[-]"  
        }
        escalones +="\n"
    }
    return escalones 
}

console.log(escalones(6));