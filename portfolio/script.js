(function(){

    // let buttons = document.querySelectorAll(".btn")
    // let images = document.querySelectorAll(".store-item")

    // buttons.forEach((b) => {
    //     b.addEventListener('click' ,(e) => {
    //         e.preventDefault()
    //         let f = e.target.dataset.filter

    //         images.forEach((img) => {
    //             if(f === 'all'){
    //                 img.style.display = 'block'
    //             }else{
    //                 if(img.classList.contains(f)){
    //                     img.style.display = 'block'
    //                 }
    //                 else{
    //                 img.style.display = 'none'
    //             }
    //         }
    //         });
    //     });
    // });
})();


function btn_click(f) {
    console.log("here i am....");
    let buttons = document.querySelectorAll(".btn")
    let images = document.querySelectorAll(".store-item")
    images.forEach((img) => {
        if(f === 'all'){
            img.style.display = 'block'
        }else{
            if(img.classList.contains(f)){
                img.style.display = 'block'
            }
            else{
            img.style.display = 'none'
        }
    }
    });
}