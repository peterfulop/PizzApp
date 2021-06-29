import PageView from '../view/PageView.js';
const pw = new PageView();

const controlReduceServings = () => {
    if (pw.DOM.servingsInput.value > 1) pw.DOM.servingsInput.value = parseInt(pw.DOM.servingsInput.value) - 1;
}

const controlEnhanceServings = () => {
    pw.DOM.servingsInput.value = parseInt(pw.DOM.servingsInput.value) + 1;
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
    pw.handleServingsMinus(controlReduceServings);
    pw.handlerServingsPlus(controlEnhanceServings);
    pw.handlerResetInputs(controlReset);
    pw.handlerCalculate(controlCalculate);
    pw.handlerBackToHome(controlBackHome);

}