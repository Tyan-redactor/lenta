//loader
$(window).on('load', function () {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({ 'overflow': 'visible' });
})

//fullpage
$(document).ready(function () {
  $('#fullpage').fullpage({
    licenseKey: 'YOUR_KEY_HERE',
    autoScrolling: true
  });
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




