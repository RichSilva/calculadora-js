
let calcForm = document.getElementById('formulario'),
    display = document.getElementById('display');

let firstValue, secondValue, operator, conta, resultado;

const numeros = document.querySelectorAll('[id*=number]');
const teclas = document.querySelectorAll('[id*=key]');

numeros.forEach(numero => numero.addEventListener('click', function(e) {
    e.preventDefault();
    switch (numero.id) {
        case 'numberOne':
            display.value += 1;
            break;
        case 'numberTwo':
            display.value += 2;
            break;
        case 'numberThree':
            display.value += 3;
            break;
        case 'numberFour':
            display.value += 4;
            break;
        case 'numberFive':
            display.value += 5;
            break;
        case 'numberSix':
            display.value += 6;
            break;
        case 'numberSeven':
            display.value += 7;
            break;
        case 'numberEight':
            display.value += 8;
            break;
        case 'numberNine':
            display.value += 9;
            break;
        case 'numberZero':
            display.value += 0;
            break;
    }
}))

teclas.forEach(tecla => tecla.addEventListener('click', function(e) {
    e.preventDefault();
    switch (tecla.id) {
        case 'keyPlus':
            verificarValor();
            operator = '+';
            display.value = '+';
            break;
        case 'keyMinus':
            verificarValor();
            operator = '-';
            display.value = '-';
            break;
        case 'keyMultiply':
            verificarValor();
            operator = 'x';
            display.value = 'x';
            break;
        case 'keyDivide':
            verificarValor();
            operator = '/';
            display.value = '÷';
            break;
        case 'keyPercent':
            verificarValor();
            operator = '%';
            display.value = '%';
            break;
        case 'keyFactorial':
            display.value += '!';
            calcularFatorial();
            break;
        case 'keyRoot':
            display.value += '√';
            calcularRaiz();
            break;
        case 'keySquare':
            verificarValor();
            operator = '^';
            display.value = '^';
            break;
        case 'keyDel':
            display.value = display.value.slice(0, -1);
            break;
        case 'keyLetterC':
            display.value = '';
            firstValue = null;
            operator = null;
            break;
        case 'keyComma':
            display.value += ',';
            break;
        case 'keyEqual':
            verificarValor();
            display.value += '=';
            window.alert(`Resultado: \n ${conta} = ${resultado}`);
            display.value = '';
            firstValue = null;
            operator = null;
            break;
        default:
            window.alert('Error');
    }
}));

function verificarValor() {
    if (firstValue == null) {
        if (display.value == '') {
            display.value = 0;
        }
        valor = (display.value).replace(',', '.');
        firstValue = parseFloat(valor);
        console.log(firstValue);
        conta = `${firstValue}`;
        console.log(conta);
    } else {
        let oper = display.value.slice(0, 1);
        valor = (display.value).replace(',', '.');
        secondValue = parseFloat(valor.slice(1));
        console.log(secondValue);
        conta += ` ${oper} ${secondValue}`;
        console.log(conta);
        calcularResultado();
    }
}

function calcularResultado() {
    if (operator != '√' && operator != '!'){
        switch (operator) {
            case '+':
                resultado = (firstValue + secondValue);
                break;
            case '-':
                resultado = (firstValue - secondValue);
                break;
            case 'x':
                resultado = (firstValue * secondValue);
                break;
            case '/':
                resultado = (firstValue / secondValue);
                break;
            case '%':
                resultado = ((firstValue / 100) * secondValue);
                break;
            case '^':
                resultado = Math.pow(firstValue, secondValue);
                break;
            default:
                window.alert('Erro! Algo de errado não está certo...')
        }
    }
    console.log(resultado);
    console.log(firstValue);
    firstValue = resultado;
}

function calcularFatorial() {
    let fatorial = parseInt(display.value.slice(0, -1));
    if (fatorial == 0) {
        resultado = 1;
    } else {
        resultado = fatorial;
    }
    for (let i = 1; i < fatorial; i++) {
        resultado *= i;
        console.log(resultado);
    }
    window.alert(`Resultado: \n ${fatorial}! = ${resultado}`);
    display.value = '';
    firstValue = null;
}

function calcularRaiz() {
    let valor = (display.value.slice(0, -1)).replace(',', '.');
    resultado = Math.sqrt(valor);
    window.alert(`Resultado: \n √${valor} = ${resultado}`);
    display.value = '';
    firstValue = null;
}
