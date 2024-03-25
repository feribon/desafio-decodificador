function criptografar() {
  let entrada = document.querySelector("#entrada").value.toLowerCase();
  let criptografado = "";
  for (i = 0; i < entrada.length; i++) {
    if (entrada[i] == "e") {
      criptografado += "enter";
    } else if (entrada[i] == "i") {
      criptografado += "imes";
    } else if (entrada[i] == "a") {
      criptografado += "ai";
    } else if (entrada[i] == "o") {
      criptografado += "ober";
    } else if (entrada[i] == "u") {
      criptografado += "ufat";
    } else {
      criptografado += entrada[i];
    }
  }
  document.getElementById("saida").value = criptografado;
}

function descriptografar() {
  let saida = document.getElementById("saida").value.toLowerCase();
  saida = saida.replace(/enter/g, "e");
  saida = saida.replace(/imes/g, "i");
  saida = saida.replace(/ai/g, "a");
  saida = saida.replace(/ober/g, "o");
  saida = saida.replace(/ufat/g, "u");
  document.getElementById("entrada").value = saida;
}

function copia1() {
  navigator.clipboard.writeText(document.getElementById("entrada").value);
}

function copia2() {
  navigator.clipboard.writeText(document.getElementById("saida").value);
}
