import cipher from './cipher.js';

console.log(cipher);

let resposta = prompt("Voce deseja decifrar ou codificar? \n Digite D para decifrar e C para codificar.");
if (resposta == "C" || resposta == "c") {
   let cifra = prompt("Digite a frase que deseja codificar: ");
   let offset = parseInt(prompt("Digite o valor de deslocamento:"));
   document.getElementById("frase").innerHTML = cifra;



   let exibir = "";
   for (let i = 0; i < cifra.length; i++) {
      let fraseCifra = (cifra.charCodeAt(i) - 65 + offset) % 26 + 65;

      exibir += String.fromCharCode(fraseCifra);

      document.getElementById("codificado").innerHTML = exibir;

   }




} else {
   (resposta == "D" || resposta == "d")
   let decifra = prompt("Digite a frase a ser decifrada: ");
   let offset = parseInt(prompt("Digite o valor de deslocamento:"));
   document.getElementById("frase").innerHTML = decifra

   let exibir = "";
   for (let i = 0; i < decifra.length; i++) {
      let fraseDecifra = (decifra.charCodeAt(i) + 65 - offset) % 26 + 65;

      exibir += String.fromCharCode(fraseDecifra);

      document.getElementById("codificado").innerHTML = exibir;

   }
}


