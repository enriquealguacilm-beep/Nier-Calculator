function addScreen(element) {
  document.getElementById('pantalla').value += element;
}

function clearScreen() {
  document.getElementById('pantalla').value = '';
}

function calculate() {
  let operation = document.getElementById('pantalla').value;

  console.log(operation);

  let operador = -1;

  for (let i = 0; i < operation.length && operador == -1; i++) {
    if (
      operation[i + 1] != undefined &&
      isNaN(operation[i]) == false &&
      isNaN(operation[i + 1]) == true
    ) {
      operador = i + 1;
    }
  }
  let operando1 = parseInt(operation.substring(0, operador));
  let operando2 = parseInt(operation.substring(operador + 1));
  console.log(operando1);
  console.log(operation[operador]);
  console.log(operando2);

  let res = 'Error';

  switch (operation[operador]) {
    case '+':
      res = operando1 + operando2;
      break;
    case '-':
      res = operando1 - operando2;
      break;
    case '*':
      res = operando1 * operando2;
      break;
    case '/':
      res = operando2 != 0 ? operando1 / operando2 : 'Error';
      break;
  }

  document.getElementById('pantalla').value = res;

  if (isNaN(res) == true) {
    document.getElementById('pantalla').value = 'Error';
  }
  console.log(res);
}
