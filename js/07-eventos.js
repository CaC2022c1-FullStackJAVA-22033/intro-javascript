let leyendaParrafo = document.getElementById("leyenda");
let x = document.getElementById("elTitulo");
let y = document.getElementById("elParrafo");
let inputNombre = document.querySelector("#fname");
let textoAnterior;

function handleParagraph( evt ) {
    //console.log("Lo logramos! Entramos a: " + evt.target.id);
    textoAnterior = evt.target.innerHTML;
    evt.target.innerHTML = "Están sobre mí :O"
}

function irse( evt ) {
    // evt (puede llamarse como gusten) es el parámetro
    // que nos llega con info sobre el evento cuando éste es ejecutado
    console.log("Nos fuimos de: " + evt.target.id);
    evt.target.innerHTML = textoAnterior;
}

function handleChangeName (evt) {
    let cant = evt.target.value.length;
    if (cant > 0) {
        leyendaParrafo.innerHTML = "Tu nombre mide " + cant + " caracteres"
    } else {
        leyendaParrafo.innerHTML = "";
    }
}

inputNombre.onkeyup = handleChangeName;

y.onclick = handleParagraph;
y.onmouseover = handleParagraph;
y.onmouseleave = irse;

x.onclick = handleParagraph;
x.onmouseover = handleParagraph;
x.onmouseleave = irse;