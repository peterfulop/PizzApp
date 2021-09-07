import { doughRatio } from '../config.js';

export default class View {

    DOM = {

        menubar: document.getElementById('menubar'),
        inputPage: document.getElementById('input-page'),
        outputPage: document.getElementById('output-page'),
        pizzaLogo: document.getElementById('pizza-logo'),
        servingsInput: document.getElementById('serving'),
        doughBall: document.getElementById('ball'),
        servingsMinus: document.getElementById('minus-quantity'),
        servingsPlus: document.getElementById('plus-quantity'),
        ballsizeMinus: document.getElementById('minus-dough'),
        ballsizePlus: document.getElementById('plus-dough'),
        resetBtn: document.getElementById('reset-btn'),
        calculateBtn: document.getElementById('calculate-btn'),
        listItemServings: document.getElementById('list-span-servings'),
        listItemFlour: document.getElementById('list-span-flour'),
        listItemWater: document.getElementById('list-span-water'),
        listItemSalt: document.getElementById('list-span-salt'),
        listItemYeast: document.getElementById('list-span-yeast'),
        listItemTotal: document.getElementById('list-span-total'),
        listItemHidratation: document.getElementById('list-span-hidratation'),
        listItemBallSize: document.getElementById('list-span-ballsize'),
        backBtn: document.getElementById('back-btn')
    }


    showHidePages(hide) {

        if (hide) {
            this.DOM.inputPage.classList.add('d-none');
            this.DOM.outputPage.classList.remove('d-none');
            this.DOM.pizzaLogo.classList.remove("rotateR");
            this.DOM.pizzaLogo.classList.add("rotateL");

        } else {
            this.DOM.inputPage.classList.remove('d-none');
            this.DOM.outputPage.classList.add('d-none');
            this.DOM.pizzaLogo.classList.remove("rotateL");
            this.DOM.pizzaLogo.classList.add("rotateR");
        }

    };

    calcAmounts() {
        const servings = this.DOM.servingsInput.value;
        const doughBall = this.DOM.doughBall.value;


        return {
            doughBall: doughBall,
            servings: parseInt(servings),
            flour: Math.round(doughRatio.flour * doughBall * servings),
            salt: Math.round(doughRatio.salt * doughBall * servings),
            water: Math.round(doughRatio.water * doughBall * servings),
            yeast: doughRatio.yeast,
            total: function () {
                return this.flour + this.salt + this.water
            },
            hidratation: function () {
                return (this.water / this.flour * 100).toPrecision(2);
            }
        }
    };


    renderOutputData() {
        const amounts = this.calcAmounts();
        this.DOM.listItemServings.innerHTML = amounts.servings;
        this.DOM.listItemFlour.innerHTML = amounts.flour;
        this.DOM.listItemWater.innerHTML = amounts.water;
        this.DOM.listItemSalt.innerHTML = amounts.salt;
        this.DOM.listItemYeast.innerHTML = amounts.yeast;
        this.DOM.listItemTotal.innerHTML = amounts.total();
        this.DOM.listItemHidratation.innerHTML = amounts.hidratation();
        this.DOM.listItemBallSize.innerHTML = amounts.doughBall;
    };

    resetInputs() {
        this.DOM.servingsInput.value = 1;
        this.DOM.doughBall.value = 270;
    };


}
