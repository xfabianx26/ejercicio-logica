
/* 
const saberPalabra = (palabra, busquedad) => {

    let texto_limpio = palabra.toLowerCase().replace(/[!¡.,-]/gi,'')
    let resultado = 0;

    if(texto_limpio.includes(busquedad)){

            let palabras = texto_limpio.split(" ");
            let mapa = {};

            for( let palabra of palabras){
                if(mapa[palabra]){
                    mapa[palabra]++;
                }else{
                  mapa[palabra] = 1;
             }
              
            }
          
            resultado = mapa[busquedad];

    }else{
        return resultado = 0;
    }

    return resultado;


    console.log(texto_limpio);

}
console.log(`Numero de coincidencias ${saberPalabra("fabian, ortiz valiente", "fabian")}`);
 */


function busquedaPalabra(palabra, busquedad){
    let cuenta = 0;
    let posicion = palabra.indexOf(busquedad)
    while( posicion != -1){
        cuenta ++;
        posicion = palabra.indexOf(busquedad, posicion+1)
    }

    return `el numero ocurrencia de la letra es ${cuenta}`
}

console.log(busquedaPalabra("fabian, fabian ","fa"));