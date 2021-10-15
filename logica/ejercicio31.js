

function angulos(angulo){

    let resultado = "Angulo completo"
    
    if(angulo < 90){
        resultado = "Angulo"
    }else if(angulo === 90){
        resultado = "Recto"
    }else if(angulo >90 && angulo < 180){
        resultado = "Obtuso"
    }else if(angulo === 180 ){
        resultado = "LLano"
    }else if(angulo >180 && angulo <= 360)
    {
        resultado = "Concavo"
    }
    


   return resultado
    
}

console.log(angulos(2222));