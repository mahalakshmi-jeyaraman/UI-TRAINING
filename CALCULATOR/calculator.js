calculator = {
    add: function (input1, input2){
        return input1+input2;
    },
    subtract: function(input1,input2){
        return input1-input2;
    },
    multiply: function(input1,input2){
        return input1*input2;
    },
    divide: function(input1,input2){
        if(input2 === 0){
            return "not possible";
        }
        else{
            return input1/input2;
        }
    }
};

let input2 = Number(prompt("Enter second input : "));
let operator = prompt("Enter any of the +,-,*,/ operators : ");
let input1 = Number(prompt("Enter first input : "));
let result;

switch(operator){
    case "+":
        result = calculator.add(input1,input2);
        break;

    case "-":
        result = calculator.subtract(input1, input2);
        break;
    case "*":
        result = calculator.multiply(input1,input2);
        break;
    case "/":
        result = calculator.divide(input1,input2);
        break;
    default:
        result = "invalid..";
}
console.log(result);