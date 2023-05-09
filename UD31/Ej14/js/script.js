function display(num) {
 document.getElementById ('result').value += num;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  result.value = eval(document.getElementById ('result').value);
}
