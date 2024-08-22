let count = 0;
function decrease(){
    count=count-1;
    span();
}
function reset(){
    count = 0;
   span();
}
function increase(){
    count = count+1;
    span();
}
   

function span(){
    document.getElementById("number").textContent = count;
}

