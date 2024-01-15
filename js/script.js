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