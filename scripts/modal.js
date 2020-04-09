var btn = document.querySelector('#showModal');
var btn2 = document.querySelector('#showModal1');
var modalDlg = document.querySelector('#image-modal');
var imageModalCloseBtn = document.querySelector('#image-modal-close');
var modalCloseBtn = document.querySelector('#modal-close1');
btn.addEventListener('click', function(){
  modalDlg.classList.add('is-active');
});
btn2.addEventListener('click', function(){
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function(){
  modalDlg.classList.remove('is-active');
  console.log("clicked")
});
modalCloseBtn.addEventListener('click', function(){
  modalDlg.classList.remove('is-active');
  console.log("clicked")
});
// .click(function() {
//   .addClass("is-active");  
// });

// $(".modal-close").click(function() {
//    $(".modal").removeClass("is-active");
// });