


function existePropiedad(objeto, propiedad)
{
    if( typeof objeto === "object" && typeof propiedad === "string" &&  objeto.hasOwnProperty(propiedad))
    {
        return true
    }

    return false
}

let usuario = {
    nombre: "fabian",
    apellido: "ortiz"
}

console.log(existePropiedad(usuario, "nombre"));