
// Component Vue instance
Vue.component('reel-row', {
    data: function () {
        return {
            deleted: false,
        }
    },
    template: "#reel-row",
    props: ['row', 'getimgfunc'],
    methods: {
        getImg: function (col) {
            let src = this.getimgfunc(this.row, col);
            return src;
        }
    }
});


// Init Vue instance
let app = new Vue({
    el: '#app',
    data: {
        reelItems: [
            {
                "id": '0',
                "img": 'img/banana.png'
            },
            {
                "id": '1',
                "img": 'img/star.png'
            },
            {
                "id": '2',
                "img": 'img/cherry.png'
            },
            {
                "id": '3',
                "img": 'img/question.png'
            },
        ],
        reel1: [0, 1, 2, 3],
        reel2: [2, 3, 0, 1],
        reel3: [3, 0, 1, 2],
        isWin: false,
        balance: 50,
        bet: 1,

    },
    methods: {
        play: function () {
            this.reel1 = this.computeNewItemIds(this.reel1);
            this.reel2 = this.computeNewItemIds(this.reel2);
            this.reel3 = this.computeNewItemIds(this.reel3);
            this.checkIsWin();
        },

        checkIsWin: function () {
            if (this.reel1[1] == this.reel2[1] && this.reel2[1] == this.reel3[1]) {
                this.isWin = true;

                switch (this.reel1[1]) {
                    case 0:
                        this.balance = this.balance + 10;
                        break;
                    case 1:
                        this.balance = this.balance + 15;
                        break;
                    case 2:
                        this.balance = this.balance + 20;
                        break;
                    case 3:
                        this.balance = this.balance + 25;
                        break;
                }
            } else {
                this.isWin = false;
                this.balance = this.balance - 1;
            }
        },

        computeNewItemIds: function (real) {
            let numImgs = 4
            let realNew = [];
            let randNum = Math.round(Math.random() * (numImgs - 1)) + 1;
            for (let i = 0; i < numImgs; i++) {
                let newImgId = real[i] + randNum;
                if (newImgId >= numImgs) {
                    newImgId = newImgId - numImgs;
                }
                realNew.push(newImgId);
            }
            real = [];
            real = realNew;
            return real;
        },

        getItemImgByRowCol: function (row, col) {
            let currentReel = this.reel1;
            switch (col) {
                case 1:
                    currentReel = this.reel1;
                    break;
                case 2:
                    currentReel = this.reel2;
                    break;
                case 3:
                    currentReel = this.reel3;
                    break;
            }

            let id = currentReel[row];

            for (let i = 0; i < this.reelItems.length; i++) {
                if (this.reelItems[i].id == id) {
                    return this.reelItems[i].img;
                }
            }
            return null;
        }
    },
})