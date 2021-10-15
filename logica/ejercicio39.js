

/* ^ (empice por una letr) a \w (que va hacer una palabra)*/
function comprobarEmail(email){

     const  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/gi;

     if(emailRegex.test(email)){
         console.log("Esto es un email valido");
     }else{
         console.log("No es un email valido");
     }

}

comprobarEmail("fabian")