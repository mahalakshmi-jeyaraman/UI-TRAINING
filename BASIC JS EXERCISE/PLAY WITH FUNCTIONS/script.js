function displayNumbers(){
    for(let i=1;i<=100;i++){
        console.log(i);
    }
}
displayNumbers();

function displayDate(){
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    console.log(day+"/"+month+"/"+year);
}
displayDate();

function averageNumbers(){
    let sum = 0;
    for(let i=0;i<myArray.length;i++){
        sum+=myArray[i];
    }
    let averageValue = sum / myArray.length;
    return averageValue;
}
const myArray = [10,20,30,40,50];
let averageValue = averageNumbers();
console.log(averageValue);

function CelsiusToFarenheit(celsius){
    let fahrenheit = (celsius * 9/5)+32;
    return fahrenheit;
}
let celsius = 36;
let fahrenheit = CelsiusToFarenheit(celsius);
console.log(fahrenheit);

function reverseString(){
    var reverseStr = "";
    for(let i=str.length-1;i>=0;i--){
        reverseStr += str[i];
    }
    return reverseStr;
}
var str = "mahalakshmi"
var reverseStr = reverseString(str);
console.log(reverseStr);