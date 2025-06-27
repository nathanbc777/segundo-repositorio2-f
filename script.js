const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    //alert("fui clicado!");
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave')
    const palavras = processaTexto(texto);

    campoResultado.textContent = palavras.join(", ");
}

function processaTexto() {
    //let palavras = texto.split(/\s+/);  "retirar espaços"
    //let palavras = texto.split(/[^a-zA-Z]+/); "letras minusculas e maiusculas"
      let palavras = texto.split("/\p{L}+/u/"); /* \P negação;  {L} conjunto de letras; + uma ou mais ocorrências; u Unicode*/

    let frequencias = [];

    for ( let i in palavras) {
        frequencias[i] = 0;
        for ( let j in palavras) {
            if(palavras[i] == palavras[j]) {
                frequecias[i]++;
            }
        }
    }

    console.log(frequencias);

    return palavras
}