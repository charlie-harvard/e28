// Init Vue instance
let app = new Vue({
    el: '#app',
    data: {
        tip: 'What is your guess? From 1 to 10.',
        debug: '',
    }
})


let randNum = Math.round(Math.random() * 11);

var guessBtn = document.querySelector("#guessBtn");
guessBtn.addEventListener("click", guess);

function guess() {
    let yourNumber = document.querySelector("#guess").value;
    let tip = document.querySelector("#tip");

    if (yourNumber > randNum) {
        tip.innerHTML = 'Too high';
    } else if (yourNumber < randNum) {
        tip.innerHTML = 'Too low';
    } else {
        tip.innerHTML = 'You are right! <a href="">Play again</a>.';
    }
}