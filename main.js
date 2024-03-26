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
    url = `https://api.mymemory.translated.net/get?q=${texto}&langpair=pt-br|eng`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

async function traduzir() {
    const texto = document.getElementById('portugues').value
    const traducao = document.getElementById('ingles')

    const trad = await mandarUrl(texto)

    console.log(trad)

    traducao.textContent = trad.responseData.translatedText
}

const btnVoice = document.getElementById('btnSpeak')

btnVoice.addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

    recognition.lang = 'pt-PT';

    recognition.onresults = (event) => {
        const speechResult = event.results[0][0].transcript;
        document.getElementById('portugues').value = speechResult;
    };

    recognition.start();
});







