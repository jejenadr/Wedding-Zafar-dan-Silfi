var myAudio = document.getElementById('Audio');
var isPlaying = false;
function tongglePlay() {
  myAudio.play();
  terakhir = document.querySelector('#box');
  terakhir.classList.add('hide');
}
