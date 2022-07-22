let number = document.getElementById("number");
let counter=0;
setInterval(() => {
    if(counter == 90)
    {
        clearInterval();
    }
    else{
    counter += 1;
    number.innerHTML = counter + "%"; }
},23);

//--------------------------------------------------------------

let number1 = document.getElementById("number1");
let counter1=0;
setInterval(() => {
    if(counter1 == 95)
    {
        clearInterval();
    }
    else{
    counter1 += 1;
    number1.innerHTML = counter1 + "%"; }
},23);

//------------------------------------------------------------------

let number2 = document.getElementById("number2");
let counter2=0;
setInterval(() => {
    if(counter2 == 95)
    {
        clearInterval();
    }
    else{
    counter2 += 1;
    number2.innerHTML = counter2 + "%"; }
},23);

//------------------------------------------------------------------

let number3 = document.getElementById("number3");
let counter3=0;
setInterval(() => {
    if(counter3 == 92)
    {
        clearInterval();
    }
    else{
    counter3 += 1;
    number3.innerHTML = counter3 + "%"; }
},23);