import { doughRatio } from '../config.js';

export default class View {

    DOM = {

        inputPage: document.getElementById('input-page'),
        outputPage: document.getElementById('output-page'),
        pizzaLogo: document.getElementById('pizza-logo'),
        servingsInput: document.getElementById('serving'),
        doughBall: document.getElementById('ball'),
        servingsMinus: document.getElementById('minus-quantity'),
        servingsPlus: document.getElementById('plus-quantity'),
        resetBtn: document.getElementById('reset-btn'),
        calculateBtn: document.getElementById('calculate-btn'),
        listItemServings: document.getElementById('list-span-servings'),
        listItemFlour: document.getElementById('list-span-flour'),
        listItemWater: document.getElementById('list-span-water'),
        listItemSalt: document.getElementById('list-span-salt'),
        listItemYeast: document.getElementById('list-span-yeast'),
        listItemTotal: document.getElementById('list-span-total'),
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
            servings: parseInt(servings),
            flour: Math.round(doughRatio.flour * doughBall * servings),
            salt: Math.round(doughRatio.salt * doughBall * servings),
            water: Math.round(doughRatio.water * doughBall * servings),
            yeast: doughRatio.yeast,
            total: function () {
                return this.flour + this.salt + this.water
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
    };

    resetInputs() {
        this.DOM.servingsInput.value = 1;
        this.DOM.doughBall.value = 300;
    };


}
