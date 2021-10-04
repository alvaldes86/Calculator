/*========Global Variables=========*/

let firstNumber = [];
let secondNumber = [];
let operator = "";
let dot = document.querySelector(".dot").innerHTML;



/*=======EVENTS===========*/
window.addEventListener('load', ()=>{
    clearScreen();
})

const clear = document.querySelector(".clear");
clear.addEventListener('click', ()=>{
    clearScreen();
})





const numbers = document.querySelectorAll(".number");   //return a node list from all the html elements that has the .number class
numbers.forEach(function(button){   //forEach will call a funtion once for each of the elements in the array or node list
    button.addEventListener('click', ()=>{      //addEventListener will take two arguments the trigger event and a function
        firstNumber.push(parseInt(button.innerHTML))
        console.log(firstNumber)          
    });
});



const operators = document.querySelectorAll(".operator");  
operators.forEach(function(operant){  
    operant.addEventListener('click', ()=>{    
           operator = operant;
           firstNumber = [];
           console.log(firstNumber)
           secondNumber = firstNumber;
           console.log('this is first ' + firstNumber)
           console.log('this is the second' + secondNumber) 
          
    });
});


const equals = document.querySelector(".equals");  
    equals.addEventListener('click', ()=>{
        console.log('first ' + firstNumber, 'second ' + secondNumber)
    });




/*============FUNCTIONS=================
 function update(userInput){
    document.querySelector(".sub-screen-1").innerHTML = userInput;
    };*/

function clearScreen(){
    userInput = " ";
    document.querySelector(".sub-screen-1").innerHTML = " ";
    document.querySelector(".sub-screen-2").innerHTML = " ";
    document.querySelector(".total").innerHTML = " ";
 }; 

function addition(firstNumber, userInput){
    return firstNumber + userInput;
};

