import friendsList from '../json/friends.json' assert {type: 'json'};

let output = "";

for(let temp of friendsList){
    output+='<div class="column-container"><div class="left-column">';
    output+='<img src="'+temp.img+'" alt="'+temp.first_name+'"/></div>';
    output+='<div class="right-column"><div class="name"><span>'+temp.first_name+'</span> <span>'+temp.last_name+'</span></div>';
    output+='<div class="email">'+temp.email+'</div>';
    output+='</div></div>';
    // break;
}

document.querySelector(".row-container").innerHTML = output;
// console.log(output);

