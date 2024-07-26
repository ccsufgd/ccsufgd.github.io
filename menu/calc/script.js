// Variáveis para manter o registro dos números e operações
let currentNumber = '';
let firstNumber = '';
let operator = '';

// Função para atualizar a tela da calculadora
function updateDisplay(value) {
  const display = document.getElementById('display');
  display.innerText = value;
}

// Função para adicionar um número à expressão atual
function appendNumber(number) {
  currentNumber += number;
  updateDisplay(currentNumber);
}

// Função para definir o operador da expressão
function setOperator(selectedOperator) {
  if (currentNumber === '') return;
  if (firstNumber !== '') {
    calculate();
  }
  operator = selectedOperator;
  firstNumber = currentNumber;
  currentNumber = '';
}

// Função para realizar o cálculo da expressão
function calculate() {
  let result = 0;
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(currentNumber);
  if (isNaN(num1) || isNaN(num2)) return;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  operator = '';
  firstNumber = '';
  updateDisplay(currentNumber);
}

// Função para limpar a calculadora
function clearCalculator() {
  currentNumber = '';
  firstNumber = '';
  operator = '';
  updateDisplay('0');
}

// Event listeners para os botões
document.getElementById('btn-0').addEventListener('click', () => appendNumber('0'));
document.getElementById('btn-1').addEventListener('click', () => appendNumber('1'));
document.getElementById('btn-2').addEventListener('click', () => appendNumber('2'));
document.getElementById('btn-3').addEventListener('click', () => appendNumber('3'));
document.getElementById('btn-4').addEventListener('click', () => appendNumber('4'));
document.getElementById('btn-5').addEventListener('click', () => appendNumber('5'));
document.getElementById('btn-6').addEventListener('click', () => appendNumber('6'));
document.getElementById('btn-7').addEventListener('click', () => appendNumber('7'));
document.getElementById('btn-8').addEventListener('click', () => appendNumber('8'));
document.getElementById('btn-9').addEventListener('click', () => appendNumber('9'));
document.getElementById('btn-add').addEventListener('click', () => setOperator('+'));
document.getElementById('btn-subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('btn-multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('btn-divide').addEventListener('click', () => setOperator('/'));
document.getElementById('btn-equals').addEventListener('click', calculate);
document.getElementById('btn-clear').addEventListener('click', clearCalculator);
