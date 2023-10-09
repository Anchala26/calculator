let input = document.getElementById("screen");

let cal=(number)=>{
    input.value += number;
}

let result=()=>{
    try{
        input.value= eval(input.value)
    }
    catch(e){
        input.value= "invalid input";
    }
}

function reset(){
    input.value= '0';
}
function del(){
    input.value= input.value.slice(0,-1)
}
