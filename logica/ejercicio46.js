



function todosSubsStrings(palabra)
{
    let substring = [];

    for(letra in  palabra){

        let comienzo = parseInt(letra) 

        for (let i = 0; i < palabra.length - comienzo; i++) {
            let final = parseInt(i) + parseInt(comienzo) 

            substring.push(palabra.substring(comienzo,final))
        }

    }

    return substring.filter(i => i.length >= 1 )
}
console.log(todosSubsStrings("hola"));
