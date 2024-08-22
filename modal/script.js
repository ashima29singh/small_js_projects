
open_modal = function() {
    console.log("hereskmdklmfkl");
    var modal = document.getElementById('modal-content');
  modal.style.display = "block";
  console.log(modal);
}

// When the user clicks on <span> (x), close the modal
close_modal = function() {
    var modal = document.getElementById('modal-content');
  modal.style.display = "none";
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

