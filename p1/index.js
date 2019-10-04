// Init Vue instance
let app = new Vue({
    el: '#app',
    data: {
        randNum: Math.round(Math.random() * 10),
        myGuess: null,
        tip: 'What is your guess? From 1 to 10.',
        debug: '',
    },
    methods: {
        guessNumber : function () {
            if (this.myGuess > this.randNum) {
                this.tip = 'Too high';
            } else if (this.myGuess < this.randNum) {
                this.tip  = 'Too low';
            } else {
                this.tip  = 'You are right!';
            }
        }
    },
})