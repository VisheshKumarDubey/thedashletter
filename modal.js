var btn = document.querySelector('#showModal');
var btn2 = document.querySelector('#showModal1');
var modalDlg = document.querySelector('#image-modal');
var imageModalCloseBtn = document.querySelector('#image-modal-close');
btn.addEventListener('click', function(){
  modalDlg.classList.add('is-active');
});
btn2.addEventListener('click', function(){
  modalDlg.classList.add('is-active');
});

imageModalCloseBtn.addEventListener('click', function(){
  modalDlg.classList.remove('is-active');
});
// .click(function() {
//   .addClass("is-active");  
// });

// $(".modal-close").click(function() {
//    $(".modal").removeClass("is-active");
// });