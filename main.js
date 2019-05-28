function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 100);

  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "%";
      elem.style.left = pos + "%";
    }
  }
}

var elembg = document.getElementById("backgroundimg");
var elembtn = document.getElementById("button");

function hideBackground() {
  elembg.style.display = "none";
  elembtn.style.display = "block";
}

function showBackground() {
  elembg.style.display = "block";
  elembtn.style.display = "none";
  setTimeout(hideBackground, 10000);
}

var music = document.getElementById("music");

function playAudio() {
  music.play();
  setTimeout(pauseAudio, 10000);
}

function pauseAudio() {
  music.pause();
}
