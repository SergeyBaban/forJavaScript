let button = document.querySelectorAll('button.buts');
let selector = document.querySelector('select.back');
let selectorFont = document.querySelector('select.colorsfont');
//let button = document.querySelector('button');
let input = document.querySelector('input');
let bck = document.querySelector('input.backspace');
let curColFont = 'gray';
let curColBack = 'white';
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

function inputNumbers(str)
{
    if (input.value === '0' || beginInput === true){
        input.value = str;
        beginInput = false;
    }
    else{
        input.value = input.value + str;
        
    }
};
function inputEqual(){
    num2 =  parseFloat(input.value);
    let answer = makeOperation(num1,num2,currentOperation);
    input.value = answer;
    start = true;
    beginInput = true;
    num1 = 0;
    num2 = 0;
};
function inputClear(){
    input.value = '0';
    start = true;
    num1 = 0;
    num2 = 0;
    beginInput = true;        
}
function inputOperation(str){
    if (start === true){
        currentOperation = str;
        num1 = parseFloat(input.value);
        start = false;
        beginInput = true;
    }
    else{
        num2 =  parseFloat(input.value);
        num1 = makeOperation(num1,num2,currentOperation);
        input.value = num1;
        currentOperation = str;
        beginInput = true;

    }
}
function inputBackspace(){
    if(input.value.length === 1)
        input.value = 0;
    else{
        input.value = input.value.slice(0,input.value.length -1);
    }

}
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
                inputNumbers(button[i].innerText);
             });
        }
        
    }
    if (button[i].innerText === '='){
        button[i].addEventListener('click',function(){
            inputEqual();
        });
    }
    if (button[i].innerText === 'C'){
        button[i].addEventListener('click',function(){
            inputClear();
        });
    }
    
    
    for(let j = 0; j<operation.length;j++){
        if (button[i].innerText === operation[j]){
            button[i].addEventListener('click',function(){
                inputOperation(button[i].innerText);
                    
            });
        }

    }
}
bck.addEventListener('click',function() {
    inputBackspace();
    
});
window.addEventListener('keypress',function(){
    for(let i = 0; i<nums.length;i++){
        if (nums[i] === this.event.key)
            inputNumbers(this.event.key);
    }
    if (this.event.key === "=" || this.event.key === "Enter")
        inputEqual();
    for(let i = 0; i<operation.length;i++){
        if (operation[i] === this.event.key)
            inputOperation(this.event.key);
    }
    if (this.event.key ==="Backspace")
    {
        inputBackspace();
    }
   
 });
 let container = document.querySelector("div.container");
 
selector.addEventListener('change',function(){
    for(let i = 1; i<5;i++){
        if (selector[i].selected === true){
            if (selector[i].value === curColFont)
                alert('цвета не должны совпадать');
            else{
            container.style.backgroundColor = selector[i].value;
            curColBack = selector[i].value;}
        }
    }
});

selectorFont.addEventListener('change',function(){
    for(let i = 1; i<5;i++){
        
        if (selectorFont[i].selected === true){

            if (selectorFont[i].value === curColBack)
                alert('цвета не должны совпадать');
            else{
                for(let j = 0; j<button.length;j++){
                    button[j].style.color = selectorFont[i].value;
                }
                bck.style.color = selectorFont[i].value;
                curColFont = selectorFont[i].value;
            }
        }
    }
});
 

 