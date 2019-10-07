// Init Vue instance
let app = new Vue({
    el: '#app',
    data: {
        randNum: Math.round(Math.random() * 10),
        myGuess: null,
        isTooLow: false,
        isTooHigh: false,
        isBingo: false,
        hint: 'What is your guess? From 1 to 10.',
        guessHistory: [],
    },
    methods: {
        guessNumber : function () {
            if (this.myGuess > this.randNum) {
                this.hint = 'Too high';
                this.isTooLow = false;
                this.isTooHigh = true;
            } else if (this.myGuess < this.randNum) {
                this.hint  = 'Too low';
                this.isTooLow = true;
                this.isTooHigh = false;    
            } else {
                this.hint  = 'You are right!';
                this.isTooLow = false;
                this.isTooHigh = false;
                this.isBingo  = true;
            }
            this.guessHistory.push(this.myGuess);
        }
    },
})