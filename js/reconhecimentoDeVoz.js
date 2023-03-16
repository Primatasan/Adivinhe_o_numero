window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const selecao = document.querySelector('[data-chute]');
const botaoInciar = document.querySelector('[data-form]');


const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

botaoInciar.addEventListener('submit', () =>{
    recognition.start();
    recognition.addEventListener('result', onSpeak);
})

function onSpeak(e){
    let chuteNum = e.results[0][0].transcript;
    let chute = chuteNum;
    if (chute == 'Sair.'){
        window.location.reload();
    } else if(chute == 'Um.'){
        chute = 1;
        verificaValor(chute);
    } else if (chute == 'Zero.'){
        chute = 0;
        verificaValor(chute);
    } else {
        verificaValor(chute);
    }

};

recognition.addEventListener('end', () => recognition.start());





