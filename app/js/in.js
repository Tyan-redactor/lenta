//scroll
var buttonBottom = document.querySelector('.functional__scroll-btn-bottom');
var buttonTop = document.querySelector('.functional__scroll-btn-top');
var footer = document.querySelector('#proekt');
var header = document.querySelector('#header');

buttonBottom.addEventListener('click', () => {
  scrollBottom(footer);
})

buttonTop.addEventListener('click', () => {
  scrollBottom(header);
})
