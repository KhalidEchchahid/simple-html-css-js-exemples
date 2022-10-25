document.addEventListener("DOMContentLoaded", function () {

    // Content ==> "c" en majuscule 

    var btn = document.querySelectorAll("input[type=button]");
    var div = document.getElementById("result");
    btn[0].addEventListener("click", function () {
        var texte = document.getElementById("texte");
        div.innerHTML = decouper(texte.value);

    })
    btn[1].addEventListener("click", function () {
        var texte = document.getElementById("texte");
        var i = prompt("donner i");
        var j = prompt("donner j");
        div.innerHTML = delimiter(texte.value, i, j);
    })
    btn[2].addEventListener("click", function () {
        var texte = document.getElementById("texte");
        div.innerHTML = abreger(texte).value;
    })


})
function decouper(texte) {
    return texte.split(" ");
}

function delimiter(texte, i, j) {
    return texte.substring(i, j);
}

function abreger(texte) {
    var noms = texte.split(" ");
    console.log(noms);
    var result = noms[0].toUpperCase();
    for (var i = 1; i < noms.length; i++) {
        result += " " + delimiter(noms[i], 0, 1).toUpperCase() + ".";
    }
    return result;
}

















