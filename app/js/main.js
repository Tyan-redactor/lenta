//loader
$(window).on('load', function () {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({ 'overflow': 'visible' });
})

//pagepiling
$(document).ready(function () {
  $('#pagepiling').pagepiling({});
  cchangePPactivity();
});

function cchangePPactivity() {
  if (window.innerWidth < 1450) {
    document.body.classList.add('pp-disable');
    bMoveDown = not_pp_moveDown;
    bMoveUp = not_pp_moveUp;
  }
  else {
    document.body.classList.remove('pp-disable');
    bMoveDown = pp_moveDown;
    bMoveUp = pp_moveUp;
  }
  console.log(bMoveUp);
}

window.addEventListener('resize', function () {
  cchangePPactivity();
});

//scroll
function scrollBottom(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

function scrollTo(element) {
  window.scroll({
    left: 0,
    bottom: element.offsetBottom,
    behavior: 'smooth'
  })
}




