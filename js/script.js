/*========Global Variables=========*/

let num1 = [];
let num2 = [];
let operator = undefined;
let total = [];


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
    button.addEventListener('click', ()=>{              //addEventListener will take two arguments the trigger event and a function
        
        if(operator === undefined){
            num1.push(parseInt(button.innerHTML))
        }else{
            num2.push(parseInt(button.innerHTML))
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

        let totalResult = String(total).split("").map((num)=>{
            return Number(num)
        })
        num1 = totalResult;
        num2 = [];
        total = "";
    });

const del = document.querySelector(".del"); 
del.addEventListener('click', function(button){
        if(operator === undefined){
            num1.pop();
            updateView();
        }else{
            num2.pop();
            updateView();
        }
});
/*============FUNCTIONS=================
 function update(userInput){
    document.querySelector(".sub-screen-1").innerHTML = userInput;
    };*/

function clearScreen(){
    num1 = [];
    num2 = [];
    operator = undefined;
    document.querySelector(".sub-screen-1").innerHTML = "";
    document.querySelector(".sub-screen-2").innerHTML = "";
    document.querySelector(".total").innerHTML = "";
 }; 

 function updateView(){
    let x = num1.join("");
    let y = num2.join("");
    let result = total
    document.querySelector(".sub-screen-1").innerHTML = x;
    document.querySelector(".sub-screen-2").innerHTML = y;
    document.querySelector(".total").innerHTML = result; 
 }

function addition(){
    total = parseInt(num1.join("")) + parseInt(num2.join(""));
};

function sustraction(){
    total = parseInt(num1.join("")) - parseInt(num2.join(""));
};

function multiply(){
    total = parseInt(num1.join("")) * parseInt(num2.join(""));
};

function divide(){
    total = parseInt(num1.join("")) / parseInt(num2.join(""));
};