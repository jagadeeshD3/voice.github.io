const btn = document.querySelector('.talk');

const content = document.querySelector('.content');


const greetings = ['hey, ela unnav pandi', 'hey pandi mokam'];

const morning = ['good morning pandi pandi' , 'pandila 10 varaku padukodame , siggu ledu '];

const weather = ['Wearther is fine pandi' , 'You need a tan pandi' , 'nekenduke pandi , elago intlone ga untavv'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition  = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is activated , you can speak');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript =  event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);

};


//add listener to the button

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud (message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'i donno what you said sir';

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text =  finalText;
    }
    
    if(message.includes('good morning')){
        const finalText = morning[Math.floor(Math.random() * morning.length)];
        speech.text =  finalText;
    }

    if(message.includes('how is weather')){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text =  finalText;
    }
    
    speech.volume = 1;
    speech.rate = 0.4;
    speech.pitch =1;

    window.speechSynthesis.speak(speech);
}