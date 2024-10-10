document.addEventListener("touchstart", on_touch);
document.addEventListener("mousedown", on_touch);

var recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';

var recognition_started = false;

function on_touch() {
    if (!recognition_started) {
        recognition.start();
        recognition_started = true;
    }
}

function onend() {
    recognition.stop();
    recognition_started = false;
}

recognition.onend = onend;
recognition.onsoundend = onend;
recognition.onspeechend = onend;

recognition.onresult = on_results;

function on_results(e) {
    document.getElementById("text").innerHTML += "Ați rostit cuvântul: " + e.results[0][0].transcript + ", acuratețe: " + e.results[0][0].confidence + "<br>";
}

recognition.onerror = function(event) {
    console.log('Eroare la recunoașterea vocală: ' + event.error);
    alert('Eroare la recunoașterea vocală: ' + event.error);
}
