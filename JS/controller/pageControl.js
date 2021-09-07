import PageView from '../view/PageView.js';
const pw = new PageView();

const controlReduceServings = () => {
    if (pw.DOM.servingsInput.value > 1) pw.DOM.servingsInput.value = parseInt(pw.DOM.servingsInput.value) - 1;
}

const controlEnhanceServings = () => {
    pw.DOM.servingsInput.value = parseInt(pw.DOM.servingsInput.value) + 1;
}

const controlReduceBallsize = () => {
    if (pw.DOM.doughBall.value > 1) pw.DOM.doughBall.value = parseInt(pw.DOM.doughBall.value) - 5;
}

const controlEnhanceBallsize = () => {
    pw.DOM.doughBall.value = parseInt(pw.DOM.doughBall.value) + 5;
}


const controlReset = () => {
    pw.resetInputs();
}

const controlCalculate = () => {
    pw.showHidePages(true);
    pw.renderOutputData();
}

const controlBackHome = () => {
    pw.showHidePages(false);

};



export default function init() {

    pw.handlerShowMenubar();
    pw.handlerHideMenubar();

    pw.handleServingsMinus(controlReduceServings);
    pw.handlerServingsPlus(controlEnhanceServings);

    pw.handlerBallsizePlus(controlEnhanceBallsize);
    pw.handlerBallsizeMinus(controlReduceBallsize);

    pw.handlerServingsUpdate();
    pw.handlerDoughBallUpdate();
    pw.handlerResetInputs(controlReset);
    pw.handlerCalculate(controlCalculate);
    pw.handlerBackToHome(controlBackHome);

}