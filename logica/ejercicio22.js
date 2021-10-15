

function cualEsMayo(num1, num2){
   
    if(num1 === num2){
        if(num1 > num2){
            console.log("El numero mayor es: "+num1 );
            console.log("El numero menor es: "+num2 );
        }else{
            console.log("El numero mayor es: "+num2 );
            console.log("El numero menor es: "+num1);
        }
    }else{
        console.log("Introduce un número");
    }
   
}

cualEsMayo(8,6)