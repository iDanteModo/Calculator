//Variables


const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display")
const result = document.querySelector('#result');

let operator , number1 , number2, trigger = true;


// Functions 

function calculatorDisplay(){
    buttons.forEach(button => {
        button.value = button.textContent;

        button.addEventListener('click', () => {
            if(button.value == "C") {
                display.textContent ="0"
            }else if (button.value == "÷") {
                button.classList.add('active');
                operator = 0;
                trigger = false;
                return operator;
            }else if (button.value == "X") {
                button.classList.add('active');
                trigger= false;
                operator = 1;
                return operator;
            }else if (button.value =="-") {
                button.classList.add('active');
                trigger = false;
                operator = 2;
                return operator;
            }else if (button.value =='+') {
                button.classList.add('active');
                trigger = false;
                operator =3;
                return operator;
            }else if(button.value ==".") {
                trigger = false;
                operator =4;
                return operator;
            }else if (button.value =="="){
        
            }else if (trigger == true && display.textContent.length == 1 && display.textContent == '0' && button.value != "C") {
                display.textContent = button.value ;
                number1 = display.textContent;
                return number1;
            }else if( trigger == true && display.textContent.length >= 1 && display.textContent != "0" ){
                display.textContent += button.value;
                number1 = display.textContent;
                return number1;
            }else if (trigger == false && display.textContent.length == 1 && display.textContent == '0' && button.value != "C") {
                display.textContent = button.value ;
                number2 = display.textContent;
                return number2;
            }else if( trigger == false && display.textContent.length >= 1 && display.textContent != "0" ){
                display.textContent += button.value;
                number2 = display.textContent;
                return number2;
            }
        })
    })
}

result.addEventListener('click', () =>{
    operate(number1, number2 ,operator)
});

function operate(number1, number2, operator){
    n1 = parseInt(number1);
    n2 = parseInt(number2);
    console.log(n1, n2);
    display.textContent = n1 + n2;
    
}


calculatorDisplay();
 

