function checkNumber() {
    let number = document.getElementById("checkNumber").value;
    let result = document.getElementById("typeOfNumber");
    if (number == 0) result.innerHTML = '<h4>O numero é: zero</h4>'
    else if (number > 0) result.innerHTML = '<h4>O numero é: positivo</h4>'
    else result.innerHTML = '<h4>O numero é: negativo</h4>'

    document.getElementById("btn-check").disabled = true;
    document.getElementById("btn-restart-number").disabled = false;
}

function restartNumber() {
    document.getElementById("checkNumber").value = '';
    document.getElementById("typeOfNumber").innerHTML = '<h4>O numero é: </h4>'

    document.getElementById("btn-check").disabled = false;
    document.getElementById("btn-restart-number").disabled = true;
}

function checkTriangle() {
    let side1 = document.getElementById("side1").value;
    let side2 = document.getElementById("side2").value;
    let side3 = document.getElementById("side3").value;
    let result = document.getElementById("typeOfTriangle");

    if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) result.innerHTML = '<h4>O triangulo é: invalido</h4>'
    else if (side1 == side2 && side2 == side3 && side1 == side3) result.innerHTML = '<h4>O triangulo é: Equilátero</h4>'
    else if (side1 == side2 || side1 == side3 || side2 == side3) result.innerHTML = '<h4>O triangulo é: Isósceles</h4>'
    else result.innerHTML = '<h4>O triangulo é: Escaleno</h4>'

    document.getElementById("btn-triangle").disabled = true;
    document.getElementById("btn-triangle-restart").disabled = false;
}

function restartTriangle() {
    document.getElementById("side1").value = '';
    document.getElementById("side2").value = '';
    document.getElementById("side3").value = '';
    document.getElementById("typeOfTriangle").innerHTML = '<h4>O triangulo é:'

    document.getElementById("btn-triangle").disabled = false;
    document.getElementById("btn-triangle-restart").disabled = true;
}

function checkYear() {
    let year = document.getElementById("year").value
    let result = document.getElementById("typeOfYear")


    if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) result.innerHTML = ' <h4>O ano é: bissexto</h4>'
    else result.innerHTML = ' <h4>O ano é: nao bissexto</h4>'

    document.getElementById("btn-year").disabled = true;
    document.getElementById("btn-year-restart").disabled = false;
}

function restartYear() {
    document.getElementById("year").value = '';
    document.getElementById("typeOfYear").innerHTML = '<h4>O ano é: </h4>'

    document.getElementById("btn-year").disabled = false;
    document.getElementById("btn-year-restart").disabled = true;
}



const insertNumber = document.getElementById("anyNumber");
const chosenNumbers = document.getElementById("chosenNumbers");
const btnInsertNumber = document.getElementById("btn-InsertNumber");
const btnCheckHighestNumber = document.getElementById("btn-checkHighest");
const highestNumber = document.getElementById("result-highestNumber");
const restartHighest = document.getElementById("btn-restartHighest");

let numbersInserted = [];

function InsertNumber() {
    if (numbersInserted.length < 2 && insertNumber.value != '') {
        numbersInserted.push(insertNumber.value);
        chosenNumbers.innerHTML = ' <h4>Os numeros escolhidos foram: ' + numbersInserted + '</h4>';
        insertNumber.value = '';
    } else if (numbersInserted.length == 2) {
        numbersInserted.push(insertNumber.value);
        chosenNumbers.innerHTML = ' <h4>Os numeros escolhidos foram: ' + numbersInserted + '</h4>';
        insertNumber.value = '';
        btnInsertNumber.disabled = true;
        btnCheckHighestNumber.disabled = false;
    }
}

function checkHighestNumber() {
    let highestNumberResult = Math.max(...numbersInserted)
    highestNumber.innerHTML = `<h3>O maior numero é: ${highestNumberResult}</h3>`
    btnCheckHighestNumber.disabled = true;
    restartHighest.disabled = false;
}

function restartHighestNumber() {
    chosenNumbers.innerHTML = '<h4>Os numeros escolhidos foram:</h4>';
    highestNumber.innerHTML = '<h3>O maior numero é:</h3>';
    btnInsertNumber.disabled = false;
    btnCheckHighestNumber.disabled = false;
    restartHighest.disabled = true;
}



function checkEvenOrOdd() {
    const checkNumber = document.getElementById("evenOrOdd").value;
    const result = document.getElementById("result-evenOrOdd");

    checkNumber % 2 === 0 ? result.innerHTML = '<h4>O numero é: par</h4>' : result.innerHTML = '<h4>O numero é: impar</h4>'

    document.getElementById("btn-evenOrOdd").disabled = true;
    document.getElementById("btn-restart-evenOrOdd").disabled = false;
}

function restartEvenOrOdd() {
    document.getElementById("evenOrOdd").value = '';
    document.getElementById("result-evenOrOdd").innerHTML = '<h4>O numero é:</h4>'

    document.getElementById("btn-evenOrOdd").disabled = false;
    document.getElementById("btn-restart-evenOrOdd").disabled = true;
}

function checkPrice() {
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;
    const discount = document.getElementById("discount");
    const total = document.getElementById("totalPrice");
    let finalValue;

    if (quantity > 10) {
        finalValue = (0, 9 * price) * quantity;
        discount.innerHTML = '<h4>Desonto aplicado: 10%</h4>'
        total.innerHTML = `<h4>Total: R$ ${finalValue} </h4>`
    } else {
        finalValue = price * quantity;
        discount.innerHTML = '<h4>Desonto aplicado: Nenhum</h4>'
        total.innerHTML = `<h4>Total: R$ ${finalValue} </h4>`
    }

    document.getElementById("btn-price").disabled = true;
    document.getElementById("btn-restart-price").disabled = false;
}

function restartPrice() {
    document.getElementById("quantity").value = '';
    document.getElementById("price").value = '';

    document.getElementById("discount").innerHTML = '<h4>Desonto aplicado: </h4>'
    document.getElementById("totalPrice").innerHTML = '<h4>Total: </h4>'

    document.getElementById("btn-price").disabled = false;
    document.getElementById("btn-restart-price").disabled = true;
}

function checkConcept() {
    const grade = document.getElementById("concept").value;
    const result = document.getElementById("result-concept");

    if (grade <= 20) result.innerHTML = '<h4>O conceito da nota é: <strong>F</strong></h4>'
    else if (grade < 40) result.innerHTML = '<h4>O conceito da nota é: <strong>D</strong></h4>'
    else if (grade < 60) result.innerHTML = '<h4>O conceito da nota é: <strong>C</strong></h4>'
    else if (grade < 80) result.innerHTML = '<h4>O conceito da nota é: <strong>B</strong></h4>'
    else result.innerHTML = '<h4>O conceito da nota é: <strong>A</strong></h4>'

    document.getElementById("btn-concept").disabled = true;
    document.getElementById("btn-restart-concept").disabled = false;
}

function restartConcept() {
    document.getElementById("concept").value = '';
    document.getElementById("result-concept").innerHTML = '<h4>O conceito da nota é: </h4>'

    document.getElementById("btn-concept").disabled = false;
    document.getElementById("btn-restart-concept").disabled = true;
}

function checkLetter() {
    const letter = document.getElementById("vowelOrConsonant").value;
    const result = document.getElementById("result-letter");

    const vowels = ['a', 'e', 'i', 'o', 'u']

    if (vowels.includes(letter)) result.innerHTML = '<h4>A letra é uma: <strong>Vogal</strong></h4>'
    else result.innerHTML = '<h4>A letra é uma: <strong>Consoante</strong></h4>'

    document.getElementById("btn-letter").disabled = true;
    document.getElementById("btn-restart-letter").disabled = false;
}

function restartLetter() {
    document.getElementById("vowelOrConsonant").value = '';
    document.getElementById("result-letter").innerHTML = '<h4>A letra é uma: </h4>';

    document.getElementById("btn-letter").disabled = false;
    document.getElementById("btn-restart-letter").disabled = true;
}

const btnWeekday = document.getElementById("btn-week");
const restartWeekday = document.getElementById("btn-restart-week");
const weekdayValue = document.getElementById("weekday");
const result = document.getElementById("result-week");


function checkWeek() {
    const weekday = Number(document.getElementById("weekday").value);

    switch (weekday) {
        case 1:
            result.innerHTML = '<h4>O dia da semana é: Segunda-feira</h4>';
            btnWeekday.disabled = true;
            restartWeekday.disabled = false;
            break;
        case 2:
            result.innerHTML = '<h4>O dia da semana é: Terca-feira</h4>';
            btnWeekday.disabled = true;
            restartWeekday.disabled = false;
            break;
        case 3:
            result.innerHTML = '<h4>O dia da semana é: Quarta-feira</h4>';
            btnWeekday.disabled = true;
            restartWeekday.disabled = false;
            break;
        case 4:
            result.innerHTML = '<h4>O dia da semana é: Quinta-feira</h4>';
            btnWeekday.disabled = true;
            restartWeekday.disabled = false;
            break;
        case 5:
            result.innerHTML = '<h4>O dia da semana é: Sexta-feira</h4>';
            btnWeekday.disabled = true;
            restartWeekday.disabled = false;
            break;
        case 6:
            result.innerHTML = '<h4>O dia da semana é: Sabado</h4>';
            btnWeekday.disabled = true;
            restartWeekday.disabled = false;
            break;
        case 7:
            result.innerHTML = '<h4>O dia da semana é: Domingo</h4>';
            btnWeekday.disabled = true;
            restartWeekday.disabled = false;
            break;
    }
}

function restartWeek() {
    weekdayValue.value = '';
    result.innerHTML = '<h4>O dia da semana é: </h4>';
    btnWeekday.disabled = false;
    restartWeekday.disabled = true;
}

const btnCheckTax = document.getElementById("btn-tax");
const btnRestartTax = document.getElementById("btn-restart-tax");
const totalIncome = document.getElementById("incomeTax");
const resultTax = document.getElementById("result-tax");
const resultOutcome = document.getElementById("result-outcome");

function checkIncomeTax() {
    let total = 0;

    if (totalIncome.value <= 33919.80 && totalIncome.value >= 24511.93) {
        total = Number(totalIncome.value * 0.075).toFixed(2)
        resultTax.innerHTML = `<h4>A sua aliquota é de: 7,5%</h4>`
        resultOutcome.innerHTML = `<h4>O total do seu imposto é de: ${total}</h4>`
        btnRestartTax.disabled = false;
        btnCheckTax.disabled = true;
    } else if (totalIncome.value <= 45012.60 && totalIncome.value > 33919.80) {
        total = Number(totalIncome.value * 0.15).toFixed(2)
        resultTax.innerHTML = `<h4>A sua aliquota é de: 15,0%</h4>`
        resultOutcome.innerHTML = `<h4>O total do seu imposto é de: ${total}</h4>`
        btnRestartTax.disabled = false;
        btnCheckTax.disabled = true;
    } else if (totalIncome.value <= 55976.16 && totalIncome.value > 45012.60) {
        total = Number(totalIncome.value * 0.225).toFixed(2)
        resultTax.innerHTML = `<h4>A sua aliquota é de: 22,5%</h4>`
        resultOutcome.innerHTML = `<h4>O total do seu imposto é de: ${total}</h4>`
        btnRestartTax.disabled = false;
        btnCheckTax.disabled = true;
    } else if (totalIncome.value >= 55976.17) {
        total = Number(totalIncome.value * 0.275).toFixed(2)
        resultTax.innerHTML = `<h4>A sua aliquota é de: 27,5%</h4>`
        resultOutcome.innerHTML = `<h4>O total do seu imposto é de: ${total}</h4>`
        btnRestartTax.disabled = false;
        btnCheckTax.disabled = true;
    }
}

function restartTax() {
    resultTax.innerHTML = '<h4>A sua aliquota é de:</h4>';
    resultOutcome.innerHTML = '<h4>O total do seu imposto é de:</h4>';
    totalIncome.value = '';
    btnRestartTax.disabled = true;
    btnCheckTax.disabled = false;
}