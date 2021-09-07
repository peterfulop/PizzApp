import View from "./View.js";

export default class PageView extends View {

    handlerServingsUpdate() {
        this.DOM.servingsInput.addEventListener('change', () => {

            this.DOM.servingsInput.value = this.DOM.servingsInput.value <= 0 ? 1 : this.DOM.servingsInput.value;

            this.DOM.servingsInput.value = this.DOM.servingsInput.value > 999 ? 999 : this.DOM.servingsInput.value;
        })
    };

    handlerDoughBallUpdate() {
        this.DOM.doughBall.addEventListener('change', () => {
            this.DOM.doughBall.value = this.DOM.doughBall.value <= 0 ? 300 : this.DOM.doughBall.value;
            this.DOM.doughBall.value = this.DOM.doughBall.value > 999 ? 999 : this.DOM.doughBall.value;
        })
    };

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

    handlerBallsizePlus(handler) {
        this.DOM.ballsizePlus.addEventListener('click', () => {
            handler();
        });
    };

    handlerBallsizeMinus(handler) {
        this.DOM.ballsizeMinus.addEventListener('click', () => {
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

    handlerShowHideMenubar() {
        this.DOM.pizzaLogo.addEventListener('click', () => {

            if (this.DOM.menubar.classList.contains("show")) {
                this.hideMenubar();
            } else {
                this.showMenubar();
            }

        })
    }

    handlerHideMenubar() {
        this.DOM.menubar.addEventListener('mouseleave', () => {
            this.hideMenubar();
        })
    }

    hideMenubar() {
        this.DOM.menubar.classList.remove("show");
        this.DOM.menubar.classList.add("hide");
    };
    showMenubar() {
        this.DOM.menubar.classList.add("show");
        this.DOM.menubar.classList.remove("hide");
    }

};
