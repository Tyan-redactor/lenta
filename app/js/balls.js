//balls
function ballBounce(e) {
  var i = e;
  if (e.className.indexOf("bounce") > -1) {
    return;
  }
  toggleBounce(i);
}

function toggleBounce(i) {
  i.classList.add("bounce");
  function n() {
    i.classList.remove("bounce");
    i.classList.add("bounce1");
    function o() {
      i.classList.remove("bounce1");
      i.classList.add("bounce2");
      function p() {
        i.classList.remove("bounce2");
        i.classList.add("bounce3");
        function q() {
          i.classList.remove("bounce3");
        }
        setTimeout(q, 150);
      }
      setTimeout(p, 150);
    }
    setTimeout(o, 150);
  }
  setTimeout(n, 150);
}

var goBtn = document.querySelector('.functional__btn');
goBtn.disabled = true;
goBtn.classList.add('disabled');

goBtn.addEventListener('click', function () {
  openPrediction();
})

setTimeout(prepare, 500);

var activeBalls = [];
var count = 0;

function prepare() {
  var array1 = document.querySelectorAll('.ballelem');
  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    element.addEventListener('mouseenter', function () {
      ballBounce(this);
    });
    element.addEventListener('click', function () {
      
      var ballRegex = element.getAttribute('src').match(/-(\d*)(-active)?/);
      var newSrc = ballRegex.input.match(/(.*)-\d+/)[0];
      if (!ballRegex[2]) {
        if (count > 2) {
          return;
        }
        newSrc += '-active';
        activeBalls[element.dataset.prediction] = '1';
        count++;
      }
      else {
        activeBalls[element.dataset.prediction] = '0';
        count--;
      }
      newSrc += '.png';
      element.setAttribute('src', newSrc);
      if (count == 3) {
        goBtn.classList.remove('disabled');
        goBtn.disabled = false;
      }
      else{
        goBtn.disabled = true;
        goBtn.classList.add('disabled');
      }
    });
  }
}

var predArray = new Array;
function openPrediction() {
  var predId = 0;
  for (const pred in activeBalls) {
    if (Object.hasOwnProperty.call(activeBalls, pred)) {
      const element = activeBalls[pred];
      if (element) {
        predArray[predId] = pred;
        predId++;
      }
    }
  }
  var selectedPred = Math.floor(Math.random() * predArray.length);
  console.log(predArray);
  console.log(selectedPred);
  location.href = 'predictions/' + predArray[selectedPred] + '.html';
}
