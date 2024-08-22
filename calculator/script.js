(function(){
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");
    
    buttons.forEach((b) =>{
        b.addEventListener('click', function(e){
            let val = e.target.dataset.num;
            screen.value = screen.value + val; 
        });
    });

    equal.addEventListener('click',function(e){
        console.log(screen.value);
        if(screen.value !== ''){
            let ans = eval(screen.value);
            screen.value = ans;
            
        };
    });

    clear.addEventListener('click',function(e){
        screen.value = "";
    })


})();