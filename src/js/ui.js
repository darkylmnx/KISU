console.log('coucouuuu');

var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var nextBtn = document.querySelector('#next');
var plusBtn = document.querySelector('#plus');

playBtn.addEventListener('click', function() {
  window.alert('the video is playing');
});
pauseBtn.addEventListener('click', function() {
  window.alert('the video is paused');
});
nextBtn.addEventListener('click', function() {
  window.alert('go to the next video');
});
plusBtn.addEventListener('click', function() {
  window.alert('show the infos');
});
