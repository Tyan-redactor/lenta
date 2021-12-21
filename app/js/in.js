//scroll
var buttonBottom = document.querySelector('.functional__scroll-btn-bottom');
var buttonTop = document.querySelector('.functional__scroll-btn-top');
var footer = document.querySelector('#proekt');
var header = document.querySelector('#header');

let pp_moveDown = function () {
  $.fn.pagepiling.moveSectionDown();
};

var pp_moveUp = function () {
  $.fn.pagepiling.moveSectionUp();
};

var not_pp_moveDown = function () {
  scrollTo(footer);
};

var not_pp_moveUp = function () {
  scrollBottom(header);
};

var bMoveDown = function () {
  
};

var bMoveUp = function () {
  
};

buttonBottom.onclick = () => {
  bMoveDown();
};

//buttonTop.addEventListener('click', function () {
//  bMoveDown();
//});

buttonTop.onclick = () => {
  bMoveUp();
};

//buttonBottom.addEventListener('click', function () {
//  bMoveUp();
//});
