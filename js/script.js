/*=======EVENTS===========*/
window.addEventListener('load', ()=>{
    clearScreen();
})

const clear = document.querySelector(".clear");
clear.addEventListener('click', ()=>{
    clearScreen();
})


const numbers = document.querySelectorAll(".number");   //return a node list from all the html elements that has the .number class
let numberString = " ";
numbers.forEach(function(button){   //forEach will call a funtion once for each of the elements in the array or node list
    button.addEventListener('click', ()=>{      //addEventListener will take two arguments the trigger event and a function
        numberString = numberString + button.innerHTML;
       update(numberString);                            //in this case console.log the clicked button
    });
});

const operators = document.querySelectorAll(".operator");  
operators.forEach(function(operant){  
    operant.addEventListener('click', ()=>{    
         console.log(operant.innerHTML)                         
    });
});

const equals = document.querySelector(".equals");  
    equals.addEventListener('click', ()=>{    
    });




/*============FUNCTIONS=================*/
 function update(numberString){
    document.querySelector(".sub-screen-1").innerHTML = numberString;
};

function clearScreen(){
    document.querySelector(".sub-screen-1").innerHTML = " ";
    document.querySelector(".sub-screen-2").innerHTML = " ";
    document.querySelector(".total").innerHTML = " ";
 }; 

function addition(){

};

