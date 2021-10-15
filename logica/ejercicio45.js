


function suspensos(alumnos)
{
    let aprobados = 0;
    let  suspenso = 0;

    for(alumno of alumnos)
    {
        if(alumno[1] >=5)
        {
            aprobados++
        }else{
            suspenso++
        }
    }

    return {
        "aprobados": aprobados,
        "suspendos": suspenso
    }
}


console.log(suspensos([
    ["fabian", 10],
    ["juan",4],
    ["tulia",2],
    ["carmen",2]
]));