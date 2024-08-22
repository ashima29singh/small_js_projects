// (function(){
    
//     console.log("reload function");
    
// })();

// function search() {       
//     // console.log("Search is called.")
//     let searchbox = document.getElementById("search-item").value.toUpperCase();
//     let storeitems = document.getElementById("product-list");
//     let product = document.querySelectorAll(".product");
//     let pname = document.getElementsByTagName("h2");
//     // console.log(product);
//     product.forEach((p) => {
//         // console.log(p);
//         let pNameElement = p.getElementsByTagName("h2")[0];

//         if(pNameElement){
//             let pName = pNameElement.textContent || pNameElement.innerHTML;
            
//             if(!pName.startsWith(searchbox)){
//                 // console.log(pName);
//                 p.style.display = "none"; 
//             } 
//             else{
//                 p.style.display = "";
//             }
            
//         }
//     });
// }



function bouncyNum(num){
    let arr = [];
    let str = String(num);
    for(i=0;i<str.length;i++){
        let digit = str.charAt(i);
        arr.push(digit);
    }
    let arr1 = arr;
    arr1.sort();
    console.log(arr1);
    let arr2 = arr;
    arr2.sort(function(a, b){return b - a});
    if(arr1 !== arr && arr2 !== arr){
        console.log('bouncy');
    }
    else{
        console.log('not');
    }
    console.log(arr);
    console.log(arr2);

}
   

// function isBouncy(num) {  
//     if (num < 10) {  
//       return false;   
//     }  
//     let increasing = true;  
//     let decreasing = true;  
//     let prevDigit = num % 10;  
//     num = Math.floor(num / 10);  
  
//     while (num > 0) {  
//       let currentDigit = num % 10;  
//       if (currentDigit < prevDigit) {  
//         increasing = false;  
//       }   
//       if (currentDigit > prevDigit) {  
//         decreasing = false;  
//       }  
//       prevDigit = currentDigit;  
//       num = Math.floor(num / 10);  
//     }  
  
//     return !(increasing || decreasing);  
//   }  