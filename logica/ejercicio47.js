
const usuarios = [
    {nombre: "fabian",  aficiones: ["informatica", "cine","videojuegos"]},
    {nombre: "pedro",  aficiones: ["cine","tenis"]},
    {nombre: "paco",  aficiones: ["informatica", "cine","surf"]},
    {nombre: "pepe",  aficiones: ["informatica", "cine","videojuegos", "futbol"]}
    
]

function  aficiones(usuarios)
{
    /* guardar diferente propiedade */
    let mapeo = {};

    usuarios.forEach(i => {
        for(aficion of i.aficiones){
            if(mapeo[aficion])
            {
                mapeo[aficion]++
            }else{
                mapeo[aficion] = 1
            }
            
        }
    });


    return mapeo
}


console.log(aficiones(usuarios));
