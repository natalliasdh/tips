const billAmount = document.querySelector("#billamount");
const tipTotal = document.querySelector("#tiptotal");
const tipPerPerson = document.querySelector("#tipperperson");
const percentAmount = document.querySelector("#percent");
const numberPeople = document.querySelector("#people");
const reset = document.querySelector("#reset");
let billAmountNum = 0;
let percentAmountNum = 0;
let numberPeopleNum = 1;
let tipPerPersonNum;
let tipTotalNum;
let oldValue = "5";

function calculate() {
    if ((isNaN(billAmountNum)) || (isNaN(numberPeopleNum))) {
        tipPerPersonNum = 0;
        tipTotalNum = 0;
    } else {
        tipPerPersonNum = billAmountNum * percentAmountNum / (100 * numberPeopleNum);
        tipTotalNum = (billAmountNum / numberPeopleNum) + tipPerPersonNum;
    }

    tipTotal.textContent = tipTotalNum.toFixed(2);
    tipPerPerson.textContent = tipPerPersonNum.toFixed(2);

}

billAmount.addEventListener("input", () => {

    billAmountNum = parseFloat(billAmount.value);

    if (isNaN(billAmountNum)) {
        document.querySelector(".warning").textContent = "Not a valid bill amount!";
        calculate();

    } else {
        document.querySelector(".warning").textContent = "";
        calculate();
    }

});

percentAmount.addEventListener('click', (e) => {

    document.querySelector(`button[data-attr="${oldValue}"]`).className = "choose";

    if (e.target.tagName === "BUTTON") {
        document.querySelector("#chooseinput").value = '';
        e.target.className = "checked";
        oldValue = e.target.dataset.attr;
        percentAmountNum = parseFloat(e.target.dataset.attr);
        console.log(percentAmountNum);
        calculate();
    }
});

percentAmount.addEventListener('input', (e) => {
    if (e.target.tagName === "INPUT") {

        percentAmountNum = parseFloat(e.target.value);

        calculate();
    }
});


numberPeople.addEventListener("input", (e) => {

    numberPeopleNum = parseInt(numberPeople.value);

    if (isNaN(numberPeopleNum)) {
        document.querySelector(".warningTwo").textContent = "Not a valid value";
        calculate();

    } else {
        document.querySelector(".warningTwo").textContent = '';
        calculate();
    }
});


reset.addEventListener("click", () => {

    billAmount.value = "";
    document.querySelector(`button[data-attr="${oldValue}"]`).className = "choose";
    document.querySelector("#chooseinput").value = '';
    numberPeople.value = '';
    billAmountNum = 0;
    percentAmountNum = 0;
    numberPeopleNum = 1;
    tipPerPerson.textContent = "0.00";
    tipTotal.textContent = "0.00";

});