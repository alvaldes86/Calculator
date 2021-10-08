/*========Global Variables=========*/

let firstNumber = [];
let secondNumber = [];
let operator = undefined;
let totalResult = "";
let counter = totalResult;

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
        if(operator === undefined || firstNumber.length === 0){
            firstNumber.push(button.innerHTML)
            console.log("first number" + firstNumber)
        }else{
            secondNumber.push(button.innerHTML)
            console.log("second" + secondNumber)
        }

        updateView();
    });
});

const operators = document.querySelectorAll(".operator");  
operators.forEach(function(operant){  
    operant.addEventListener('click', ()=>{    
            operator = operant.innerHTML

    });
});

const equals = document.querySelector(".equals");  
    equals.addEventListener('click', ()=>{
        if(operator === "+"){
            addition();
            updateView();
        }else if(operator === "-"){
            sustraction();
            updateView();
        }else if(operator === "*"){
            multiply();
            updateView();
        }else if(operator === "÷"){
            divide();
            updateView();
        }
    });

/*============FUNCTIONS=================
 function update(userInput){
    document.querySelector(".sub-screen-1").innerHTML = userInput;
    };*/

function clearScreen(){
    firstNumber = [];
    secondNumber = [];
    operator = undefined;
    //totalResult = "";
    document.querySelector(".sub-screen-1").innerHTML = " ";
    document.querySelector(".sub-screen-2").innerHTML = " ";
    document.querySelector(".total").innerHTML = " ";
 }; 

 function updateView(){
    document.querySelector(".sub-screen-1").innerHTML = firstNumber.join("");
    document.querySelector(".sub-screen-2").innerHTML = secondNumber.join("");
    document.querySelector(".total").innerHTML = totalResult; 
 }

function addition(){
    totalResult = parseInt(firstNumber.join("")) + parseInt(secondNumber.join(""));
    return totalResult
};

function sustraction(){
    totalResult = parseInt(firstNumber.join("")) - parseInt(secondNumber.join(""));
    return totalResult
};

function multiply(){
    totalResult = parseInt(firstNumber.join("")) * parseInt(secondNumber.join(""));
    return totalResult
};

function divide(){
    totalResult = parseInt(firstNumber.join("")) / parseInt(secondNumber.join(""));
    return totalResult
};