

function verificaValor(chute){

    chute = parseInt(chute)

    if(Number.isNaN(chute)){
        selecao.innerHTML = `<h3>Número invalido, tente outra vez</h3>`
    } else if(chute < minNum || chute > maxNum){
        selecao.innerHTML = `<h3>Sua tentativa deve estar entre ${minNum} e ${maxNum}</h3>`
    } else if(chute < numeroSorteado){
        exibirChute(chute, "O múmero é maior que seu chute", "up")
    } else if (chute > numeroSorteado){
        exibirChute(chute, "O múmero é menor que seu chute", "down")
    } else {
        exibirVitoria(chute)
    }
}

function exibirChute(chute, frase, sentido){
    selecao.innerHTML = `
    <h3>Você disse:</h3>
    <div  class="caixa">
        <p data-chute>${chute}</p>
    </div>
    <p data-mensagem class="mensagemtexto">${frase} <i class="fa-sharp fa-solid fa-arrow-${sentido}"></i> <br> Tente outra vez...</p>`;
}

function exibirVitoria(chute){
    document.querySelector('main').innerHTML = `
        <h1 class="margembaixa">Você acertou!</h1>
        <h3 class="margembaixagrande" >O número certo é ${chute}</h3>

        <div class="botaobox margem">
            <button onclick="window.location.reload()" id="botaoretorno">Jogar outra vez</button>
        </div>
    `
    
}
