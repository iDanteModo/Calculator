//Variables


const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display")
const result = document.querySelector('#result');
const backspace = document.querySelector('#backspace')

let operator , number1 , number2, trigger = true, keepTheValue = false, total =0;


// Functions 

function calculatorDisplay(){
    buttons.forEach(button => {
        button.value = button.textContent;
        button.addEventListener('click', () => {
            adjustFontSize(display);
            if(button.value == "C") {
                trigger = true;
                keepTheValue = false;
                display.textContent ="0"
                adjustFontSize(display);
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
            }else if (button.value =="=") {
            }else if (button.value =="→" && trigger == true) {
                keepTheValue = false;
                display.textContent = display.textContent.slice(0, -1);
                number1 = display.textContent;
                return number1;
            }else if(trigger == false && button.value =="→"){
                keepTheValue = false;
                display.textContent = display.textContent.slice(0, -1);
                number2 = display.textContent;
                return number2;
            }else if (trigger == true && button.value == ".") {
                display.textContent += button.value;
                number1 = display.textContent;
                return number1;
            }else if (trigger == true && display.textContent.length == 1 && display.textContent == '0' && button.value != "C" && button.value != ".") {
                display.textContent = button.value ;
                number1 = display.textContent;
                return number1;
            }else if( trigger == true && display.textContent.length >= 1 && display.textContent != "0" ){
                display.textContent += button.value;
                number1 = display.textContent;
                return number1;
            }else if(trigger == false && button.value == "."){
                display.textContent += button.value;
                number2 = display.textContent;
                return number2;
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
    buttons.forEach(button => {
        button.classList.remove('active');
    })
});

function operate(number1, number2, operator){    
    if(keepTheValue == false){
        n1 = parseFloat(number1);
        n2 = parseFloat(number2);
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
    }else if( keepTheValue == true){
        n2 = parseFloat(number2);
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
    }else if(n2 == NaN){
        display.textContent = total;
    } 
    adjustFontSize(display);
}

// backspace.addEventListener('click',() => {
//     display.textContent = display.textContent.slice(0, -1);
// })

function adjustFontSize(display) {
    const maxFontSize = 200; // Maximum font size in pixels
    const minFontSize = 80; // Minimum font size in pixels
    const maxLength = 6; // Maximum number of characters before font size starts decreasing

    const length = display.textContent.length;

    console.log(`Current display length: ${length}`);
    
    if (length > maxLength) {
        // Calculate the font size based on the number of characters
        let newSize = maxFontSize - (length - maxLength) * 30; // Scale down more aggressively
        newSize = Math.max(newSize, minFontSize); // Ensure font size doesn't go below min
        display.style.fontSize = newSize + 'px';
    } else {
        display.style.fontSize = maxFontSize + 'px';
    }
}

adjustFontSize(display);
calculatorDisplay();
 

