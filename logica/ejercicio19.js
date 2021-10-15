
function misPeliculas(peliculas){

    for(let pelicula of peliculas){

        let paraMostrar = `"${pelicula.titulo} de ${pelicula.director}"`

        if(pelicula.vista){
            console.log("Ya has visto: ", paraMostrar);
        }else{
            console.log("Te falta por ver: ", paraMostrar);
        }
    }
    return peliculas;
}

const peliculas = [
    {
        titulo: "El señor de los aniños",
        director: "Peter jackson",
        vista: true
    },
    {
        titulo: "La liga de la justicia",
        director: "Zack Snyder",
        vista: false
    },
    {
        titulo: "Los vengadores",
        director: "Joe Russo",
        vista: true
    },
    {
        titulo: "Batman vs Superman",
        director: "Zack Snyder",
        vista: false
    }

]



misPeliculas(peliculas)