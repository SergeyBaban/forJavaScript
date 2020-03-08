let button = document.querySelectorAll('button');
//let button = document.querySelector('button');
let input = document.querySelector('input');

let num1 = 0;
let num2 = 0;
let start = true;
beginInput = true;
let currentOperation;
let nums = ['1','2','3','4','5','6','7','8','9','0'];
let operation = ['/','*','+','-'];
let equal = ['='];
let forClear = ['C'];
let nButtons = button.length;
/*window.addEventListener('keypress',function(){
    input.placeholder = this.event.key;
 });*/
function makeOperation(n1, n2, op){
    let answer;
            switch(op){
                case "/":
                    answer = n1/n2;
                    break;
                case "*":
                    answer = n1*n2;
                    break;
                case "+":
                    answer = n1+n2;
                    break;
                case "-":
                    answer = n1-n2;
                    break;
            }
    return answer;
}
for (let i = 0; i < nButtons; i++){
    for (let j = 0; j<nums.length;j++)
    {
        if (nums[j] === button[i].innerText){
            button[i].addEventListener('click',function(){
                if (input.placeholder === '0' || beginInput === true){
                    input.placeholder = button[i].innerText;
                    beginInput = false;
                }
                else{
                    input.placeholder = input.placeholder + button[i].innerText;
                    
                }
                
            });
        }
        
    }
    if (button[i].innerText === '='){
        button[i].addEventListener('click',function(){
            num2 =  parseFloat(input.placeholder);
            let answer = makeOperation(num1,num2,currentOperation);
            input.placeholder = answer;
            start = true;
            beginInput = true;
            num1 = 0;
            num2 = 0;
        });
    }
    if (button[i].innerText === 'C'){
        button[i].addEventListener('click',function(){
            input.placeholder = '0';
            start = true;
            num1 = 0;
            num2 = 0;
            beginInput = true;
        });
    }
    for(let j = 0; j<operation.length;j++){
        if (button[i].innerText === operation[j]){
            button[i].addEventListener('click',function(){
                if (start === true){
                    currentOperation = button[i].innerText;
                    num1 = parseFloat(input.placeholder);
                    start = false;
                    beginInput = true;
                }
                else{
                    num2 =  parseFloat(input.placeholder);
                    num1 = makeOperation(num1,num2,currentOperation);
                    input.placeholder = num1;
                    currentOperation = button[i].innerText;
                    beginInput = true;

                }
                    
            });
        }

    }
}
