const Players = ["Ram", "Ramu", "Somu", "Soma", "Ajay", "Kumar", "Laxman", "Santhosh", "Naren", "Gokul", "Arun"];
        console.log(Players);

Players.shift();
console.log(Players);

console.log(Players.length);

Players.push("Ram");
console.log(Players);

console.log(Players.sort());

function assignJerseyNumbers(Players){
    JerseyNumbers = [];
    while(JerseyNumbers.length<Players.length){
        randomNumbers = Math.floor(Math.random()*100);
        if(!JerseyNumbers.includes(randomNumbers)){
            JerseyNumbers.push(randomNumbers);
        }
    }
    return JerseyNumbers;
}
JerseyNumbers = assignJerseyNumbers(Players);
for(let i=0;i<Players.length;i++){
    console.log(Players[i]+"-"+JerseyNumbers[i]);
}
        
printJersey = Players.map(p => p.toUpperCase());
console.log(printJersey);