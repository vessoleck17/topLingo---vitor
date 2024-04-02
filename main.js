'use strict'

function darkModeToggle() {
    var body = document.body;
    var icons = document.getElementById('icon')
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        icons.src = "./img/lua.png"
        // button.textContent = "Dark";
    } else {
        body.classList.add("dark-mode");
        icons.src = "./img/sol.png"
        // button.textContent = "Light";
    }
}


// texto.addEventListener("keyup", () => {
//     let inputValue = texto.value.toLowerCase();
//     if (inputValue.includes("alice")) {
//         document.body.classList.add("alice-mode");
//     } else {
//         document.body.classList.remove("alice-mode");
//     }
// })

async function mandarUrl(texto) {
    const url = `https://api.mymemory.translated.net/get?q=${texto}&langpair=pt-br|eng`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function traduzir() {
    var texto = document.getElementById('portugues').value
    var traducao = document.getElementById('ingles')

    var trad = await mandarUrl(texto)

    console.log(trad)

    traducao.textContent = trad.responseData.translatedText

     

    // função para falar o texto traduzido


var listenBtn = document.getElementById('btnListen')
listenBtn.addEventListener('click', async function (){

    if('speechSynthesis' in window){

        const translated = trad.responseData.translatedText
        const listenText = new SpeechSynthesisUtterance(translated)

        speechSynthesis.speak(listenText)
    

    }else{
        alert("navegador não compatível")
    }
})
}






var speakBtn = document.getElementById('btnSpeak')
speakBtn.addEventListener('click', function(){

    var transcription = document.getElementById('portugues')

    if(window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition){
       
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        
        if(recognition=='nathalia'){
            
        }
        
        recognition.lang = 'pt-BR';

        try{
            recognition.start()
        }catch(erro){
            console.log(erro)
        }

        recognition.addEventListener('result', function(event){
            var result = event.results[0][0].transcript
            transcription.value = result
        })

    }else{
        console.log('navegador não compatível')
    }
})


    

    // recognition.onresults = (event) => {
    //     alert('chegou aqui')
    //     const transcript = event.results[event.results.length - 1][0].transcript;
    //     document.getElementById('portugues').textContent = transcript;
    // };

    // recognition.start();
    // }else{
    //     alert('Navegador não compatível')
    // }

// })


   

    






