function calculator() {

    let number1;
    let number2;
    let result;

    function init(selector1, selector2, resultSelector) {
    number1 = document.querySelector(selector1);
    number2 = document.querySelector(selector2);
    result = document.querySelector(resultSelector);
    }
    function add() {
        result.value = Number(number1.value) + Number(number2.value);
    }
    function subtract() {
        result.value = Number(number1.value) - Number(number2.value);
    }
    return {
        init,
        add,
        subtract
    }
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result');





