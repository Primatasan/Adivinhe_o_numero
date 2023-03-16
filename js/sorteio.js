const form = document.querySelector('[data-form]')
const mensagemInicio = document.querySelector('[data-mensageminicio]')
const campoJogo = document.querySelector('[data-areajogo]')

let minNum;
let maxNum;

let numeroSorteado;


form.addEventListener("submit",(e) => comecarJogo(e))

function comecarJogo(e){
    e.preventDefault();
    minNum= e.target.elements['menornumero'].value
    maxNum = e.target.elements['maiornumero'].value

    numeroSorteado = sorteio(minNum, maxNum)

    ajustesDeTexto()

}


function sorteio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max)
   return Math.floor(Math.random() * (max-min + 1) + min)
}

function ajustesDeTexto(){
    campoJogo.classList.add('sumir')

    mensagemInicio.innerHTML = `<h2 class="margem">Começou!</h2>
    <br>
    <p class="margembaixa mensagem">Fale um numero para tentar adivinhar
    <br> 
    o número sorteado entre ${minNum} e ${maxNum}!</p>`
    
}





