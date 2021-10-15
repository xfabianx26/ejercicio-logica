
const deOchoEnOcho = (desde, hasta) => {

    console.log("La lista "+desde+ " hasta "+hasta );
    for (let i = desde; i >hasta; i-=8) {
        
        console.log(`N°- ${i}`);
        
    }


}
console.log(deOchoEnOcho(100,0));