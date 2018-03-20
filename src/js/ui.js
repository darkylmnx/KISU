import { loadNextVideo, playVideo, pauseVideo } from './yt-loader';

// PLAYER BUTTONS ---------------------
var muteBtn = document.querySelector('#mute');
var unmuteBtn = document.querySelector('#unmute');
var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var nextBtn = document.querySelector('#next');
var plusBtn = document.querySelector('#plus');

muteBtn.addEventListener('click', function() {
  muteBtn.classList.toggle('is-active');
  unmuteBtn.classList.toggle('is-active');
});
unmuteBtn.addEventListener('click', function() {
  muteBtn.classList.toggle('is-active');
  unmuteBtn.classList.toggle('is-active');
});
muteBtn.addEventListener('click', function() {

});
unmuteBtn.addEventListener('click', function() {

});

playBtn.addEventListener('click', function() {
  playBtn.classList.toggle('is-active');
  pauseBtn.classList.toggle('is-active');
});
pauseBtn.addEventListener('click', function() {
  playBtn.classList.toggle('is-active');
  pauseBtn.classList.toggle('is-active');
});
playBtn.addEventListener('click', function() {
  playVideo();
});
pauseBtn.addEventListener('click', function() {
  pauseVideo();
});
nextBtn.addEventListener('click', function() {
  var video = loadNextVideo();
  renderUI(video);
});
plusBtn.addEventListener('click', function() {

});


// SEARCH -----------------------------
function changeBurger() {
  var lines = document.querySelectorAll('.header_menu_line');
  lines[0].classList.toggle('rotate');
  lines[1].classList.toggle('disappear');
  lines[2].classList.toggle('invRotate');
}
var burger = document.querySelector('.header_menu');
var search = document.querySelector('.search');
burger.addEventListener('click', function() {
  search.classList.toggle('not-hidden');
  changeBurger()
});

function renderUI(video) {
    // update the ui
}
