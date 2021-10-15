


function sacarLaMedia(array)
{
    
    let suma = array.reduce((valorAcomulado, numeroActual ) => {
        return valorAcomulado + numeroActual
    })

    let media = (suma/ array.length)

    return media
}

console.log(sacarLaMedia([1,2,3,4,5,6]));