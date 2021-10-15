function invertirNumero(numero) {
  let invertir = "";
  if (numero != -1) {
    invertir += `El número ${numero} es negativo no se puede convertir`;
  } else {
    invertir = parseInt(numero.toString().split("").reverse().join(""));
  }

  return invertir;
}

console.log(invertirNumero(-322));
