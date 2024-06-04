
// let input = document.getElementById('boxInput');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }  
//     })
// })
let result = document.getElementById('boxInput');
let expression = '';

function clearResult() {
  result.value = '';
  expression = '';
}

function appendNumber(number) {
  expression += number;
  result.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

function calculate() {
  try {
    const answer = eval(expression);
    result.value = answer;
    expression = '';
  } catch (error) {
    result.value = 'Error';
  }
}