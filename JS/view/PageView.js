import View from "./View.js";

export default class PageView extends View {

    handlerServingsPlus(handler) {
        this.DOM.servingsPlus.addEventListener('click', () => {
            handler();
        });
    };

    handleServingsMinus(handler) {
        this.DOM.servingsMinus.addEventListener('click', () => {
            handler();
        });
    };

    handlerCalculate(handler) {
        this.DOM.calculateBtn.addEventListener('click', () => {
            handler();
        });
    };

    handlerResetInputs(handler) {
        this.DOM.resetBtn.addEventListener('click', () => {
            handler();
        });
    };

    handlerBackToHome(handler) {
        this.DOM.backBtn.addEventListener('click', () => {
            handler();
        });
    };

};
