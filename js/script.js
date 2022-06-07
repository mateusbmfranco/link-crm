document.body.onload = formSignUp;

function formSignUp() {
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
    divNova.appendChild(conteudoNovo); 

    var divAtual = document.getElementById("form-inner");
    document.body.insertBefore(divNova, divAtual);
}