

function calcularDias(dias){

    let años = Math.floor((dias/365))
    let dias_restantes = (dias%365)
    let meses = Math.floor((dias_restantes/30))
    dias_restantes = dias_restantes%30

    return `Equivale a ${años} años,  ${meses} meses y ${dias_restantes} días.`
}
console.log(calcularDias(1200));