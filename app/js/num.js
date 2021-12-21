//counter
function countUp(max, time) {
  var num = 0;
  var step = time / max;
  var fn = function () {
    num++;
    if (num <= max) {
      document.getElementById("status").innerHTML = num;
      window.setTimeout(fn, step);
    }
  }
  fn();
}

countUp(500, 200);
