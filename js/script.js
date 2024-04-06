function inserir(num) {

    document.querySelector(".tela").innerHTML += num;
    

    console.log("my name pedro")

}

function clean(){

    document.querySelector(".tela").innerHTML = ""

    console.log("pedro")
}

function back() {
    
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = tela.substring(0, tela.length - 1)


}

function somar() {
    let tela =  document.querySelector(".tela").innerHTML;

    if(tela) {
        document.querySelector(".tela").innerHTML = eval(tela);
    } else{
        document.querySelector(`.tela`).innerHTML = "nenhum comando"
    }

}

function ascender() {

    var light = document.getElementById("day");
    light.style.display = "none"

    var dark = document.getElementById("night")
    dark.style.display = "flex"

    var background = document.getElementById("bacColor")
    background.style.backgroundColor = "rgb(239, 235, 228)"

    var text = document.getElementById("mb")
    text.style.color = "black"

    var back = document.getElementById("clicar");
    back.style.backgroundColor = "#2e2e2e"

    var micText = document.getElementById("micro")
    micText.style.color = "black"
}

function escurecer(){

    var light = document.getElementById("night");
    light.style.display = "none"

    var dark = document.getElementById("day")
    dark.style.display = "flex"

    var background = document.getElementById("bacColor")
    background.style.backgroundColor = "#2b2b2b"

    var text = document.getElementById("mb")
    text.style.color = "white"

    var back = document.getElementById("clicar");
    back.style.backgroundColor = "#a5a5a5"

    var micText = document.getElementById("micro")
    micText.style.color = "white"


}