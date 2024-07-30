//Variables


const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display")
const result = document.querySelector('#result');

let operator , number1 , number2, trigger = true, keepTheValue = false, total =0;


// Functions 

function calculatorDisplay(){
    buttons.forEach(button => {
        button.value = button.textContent;

        button.addEventListener('click', () => {
            if(button.value == "C") {
                trigger = true;
                keepTheValue = false;
                display.textContent ="0"
            }else if (button.value == "÷") {
                button.classList.add('active');
                operator = 0;
                trigger = false;
                display.textContent = "0";
                return operator;
            }else if (button.value == "X") {
                button.classList.add('active');
                trigger= false;
                operator = 1;
                display.textContent = "0";
                return operator;
            }else if (button.value =="-") {
                button.classList.add('active');
                trigger = false;
                operator = 2;
                display.textContent = "0";
                return operator;
            }else if (button.value =='+') {
                button.classList.add('active');
                trigger = false;
                operator =3;
                display.textContent = "0";
                return operator;
            }else if(button.value ==".") {
                trigger = false;
                operator =4;
                display.textContent = "0";
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
    
    if(keepTheValue == false){
        n1 = parseInt(number1);
        n2 = parseInt(number2);
        console.log(`N1 = ${n1} and N2 = ${n2} trigger is ${trigger}`);
        if( operator == 0) {
            display.textContent = n1 / n2;
            total = n1/n2;
            keepTheValue = true;
        }else if(operator == 1) {
            display.textContent = n1 * n2;
            total = n1 * n2;
            keepTheValue = true;
        }else if(operator == 2) {
            display.textContent = n1 - n2;
            total = n1 - n2;
            keepTheValue = true;
        }else if(operator == 3) {
            display.textContent = n1 + n2;
            total = n1 + n2;
            keepTheValue = true;
        }
    }else if( keepTheValue = true){
        n2 = parseInt(number2);
        n1 = total;
        console.log(`N1 = ${n1} and N2 = ${n2} trigger is ${trigger}`);
        if( operator == 0) {
            display.textContent = n1 / n2;
            total = n1/n2;
            keepTheValue = true;
        }else if(operator == 1) {
            display.textContent = n1 * n2;
            total = n1 * n2;
            keepTheValue = true;
        }else if(operator == 2) {
            display.textContent = n1 - n2;
            total = n1 - n2;
            keepTheValue = true;
        }else if(operator == 3) {
            display.textContent = n1 + n2;
            total = n1 + n2;
            keepTheValue = true;
        }
    } 
}


calculatorDisplay();
 
